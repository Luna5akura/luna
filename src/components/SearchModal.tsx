// components/SearchModal.tsx
import { Post } from '@/types';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchModalProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  onClose: () => void;
  posts: Post[];
}

const SearchModal: React.FC<SearchModalProps> = ({
  searchTerm,
  onSearchTermChange,
  onClose,
  posts,
}) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    inputRef.current?.focus();
    resultRefs.current = [];
  }, []);

  useEffect(() => {
    setFocusedIndex(-1); // 搜索词变化时重置焦点
  }, [searchTerm]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab' && filteredPosts.length > 0) {
      e.preventDefault();
      const maxIndex = filteredPosts.length - 1;

      if (e.shiftKey) {
        // Shift+Tab 处理
        if (focusedIndex <= 0) {
          inputRef.current?.focus();
          setFocusedIndex(-1);
        } else {
          const newIndex = Math.max(0, focusedIndex - 1);
          setFocusedIndex(newIndex);
          resultRefs.current[newIndex]?.focus();
        }
      } else {
        // 普通 Tab 处理
        if (focusedIndex === -1) {
          // 从输入框跳转到第一个结果
          setFocusedIndex(0);
          resultRefs.current[0]?.focus();
        } else if (focusedIndex < maxIndex) {
          const newIndex = focusedIndex + 1;
          setFocusedIndex(newIndex);
          resultRefs.current[newIndex]?.focus();
        } else {
          // 回到输入框
          inputRef.current?.focus();
          setFocusedIndex(-1);
        }
      }
    }
  };

  const handlePostClick = (id: number) => {
    navigate(`/posts/${id}`);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 p-4 rounded-lg w-full max-w-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search posts..."
          className="w-full p-2 rounded bg-slate-700 text-sky-100"
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="mt-2 max-h-60 overflow-auto">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              ref={(el) => (resultRefs.current[index] = el)}
              tabIndex={0}
              className={`p-2 hover:bg-slate-700 rounded cursor-pointer text-sky-100
                ${focusedIndex === index ? 'bg-slate-700 ring-2 ring-sky-400' : ''}`}
              onClick={() => handlePostClick(post.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handlePostClick(post.id);
                }
              }}
            >
              {post.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;