/* eslint-disable @typescript-eslint/no-explicit-any */
// src/utils/remarkWrapSections.ts
import { Plugin } from 'unified';
import { Node, Parent } from 'unist';
// import { visit } from 'unist-util-visit';

interface HeadingNode extends Node {
  type: 'heading';
  depth: number;
  children: Node[];
}

interface ElementNode extends Node {
  type: 'element';
  tagName: string;
  properties: { [key: string]: any };
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
