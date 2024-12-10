declare module '*.md' {
  import { ComponentType } from 'react';
  const attributes: Record<string, unknown>;
  const html: string;
  const ReactComponent: ComponentType;
  export { attributes, html, ReactComponent };
  export default ReactComponent;
}
