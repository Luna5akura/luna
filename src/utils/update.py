#!/usr/bin/env python3
"""
更新 Markdown 文件的 YAML Frontmatter：
- 如果没有 date:，则添加文件的最后修改日期 (mtime)
- 如果没有 title:，则从文件名生成 Title Case
"""

import os
import sys
from datetime import datetime
import frontmatter
import re

def to_title_case(filename: str) -> str:
    """将 snake_case 或 kebab-case 文件名转为 Title Case"""
    # 去掉扩展名
    name = os.path.splitext(filename)[0]
    # 替换 _ 和 - 为空格
    name = re.sub(r'[_-]+', ' ', name)
    # 转为 Title Case
    return ' '.join(word.capitalize() for word in name.split())

def process_markdown_file(file_path: str, backup: bool = True) -> bool:
    """处理单个 Markdown 文件"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            post = frontmatter.load(f)

        modified = False
        filename = os.path.basename(file_path)

        # 1. 处理 title（如果不存在）
        if 'title' not in post.metadata or not str(post.metadata.get('title', '')).strip():
            post.metadata['title'] = to_title_case(filename)
            modified = True
            print(f"  → 添加 title: {post.metadata['title']}")

        # 2. 处理 date（如果不存在）
        if 'date' not in post.metadata or not str(post.metadata.get('date', '')).strip():
            # 获取文件最后修改时间
            mtime = os.path.getmtime(file_path)
            date_str = datetime.fromtimestamp(mtime).strftime('%Y-%m-%d')
            post.metadata['date'] = date_str
            modified = True
            print(f"  → 添加 date: {date_str}  (来自文件修改时间)")

        # 如果有修改，则保存
        if modified:
            if backup:
                backup_path = file_path + '.bak'
                os.rename(file_path, backup_path)
                print(f"  → 已备份原文件为 {os.path.basename(backup_path)}")
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(frontmatter.dumps(post))
            
            print(f"✓ 已更新: {filename}")
            return True
        else:
            print(f"  ✓ 无需修改: {filename}")
            return False

    except Exception as e:
        print(f"✗ 处理失败 {filename}: {e}")
        return False


def main():
    # ================== 配置区域 ==================
    target_dir = '../posts'          # ← 修改为您的 Markdown 文件夹路径
    recursive = True                 # 是否递归子文件夹
    create_backup = True             # 是否备份原文件（推荐开启）
    # =============================================

    if not os.path.isdir(target_dir):
        print(f"错误：目录不存在 → {target_dir}")
        print("请修改脚本中的 target_dir 为正确的 posts 文件夹路径")
        sys.exit(1)

    print(f"开始扫描目录: {target_dir}\n")

    processed_count = 0
    updated_count = 0

    for root, dirs, files in os.walk(target_dir) if recursive else [(target_dir, [], os.listdir(target_dir))]:
        for filename in files:
            if filename.lower().endswith('.md'):
                file_path = os.path.join(root, filename)
                print(f"处理: {os.path.relpath(file_path, target_dir)}")
                
                if process_markdown_file(file_path, backup=create_backup):
                    updated_count += 1
                processed_count += 1

    print("\n" + "="*60)
    print(f"处理完成！共处理 {processed_count} 个 .md 文件，其中更新了 {updated_count} 个。")
    if create_backup:
        print("原文件已备份为 .bak 后缀（可手动删除）")
    print("="*60)


if __name__ == "__main__":
    main()