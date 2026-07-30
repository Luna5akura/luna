// src/utils/remarkWrapSections.ts
import type { Plugin } from 'unified';
import type { Node, Parent } from 'unist';

interface HeadingNode extends Node {
  type: 'heading';
  depth: number;
  children: Node[];
}

interface ElementNode extends Node {
  type: 'element';
  tagName: string;
  properties: Record<string, unknown>;
  children: Node[];
}

const remarkWrapSections: Plugin = () => {
  return (tree: Node) => {
    const newChildren: Node[] = [];
    let sectionNodes: Node[] = [];
    let currentLevel: number | null = null;

    const parent = tree as Parent;

    parent.children.forEach((node: Node) => {
      if (node.type === 'heading') {
        const headingNode = node as HeadingNode;

        if (sectionNodes.length > 0) {
          const section: ElementNode = {
            type: 'element',
            tagName: 'div',
            properties: { className: [`section-level-${currentLevel}`] },
            children: sectionNodes,
          };
          newChildren.push(section);
          sectionNodes = [];
        }
        currentLevel = headingNode.depth;
        sectionNodes.push(node);
      } else {
        sectionNodes.push(node);
      }
    });

    if (sectionNodes.length > 0) {
      const section: ElementNode = {
        type: 'element',
        tagName: 'div',
        properties: { className: [`section-level-${currentLevel}`] },
        children: sectionNodes,
      };
      newChildren.push(section);
    }

    parent.children = newChildren;
  };
};

export default remarkWrapSections;
