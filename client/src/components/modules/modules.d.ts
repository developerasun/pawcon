// If you use editor.js in TypeScript you need to explicitly specify 
// that typeof Tool implements BlockToolConstructable or InlineToolConstructable
declare module '@editorjs/header' {
    import { BlockTool } from '@editorjs/editorjs'

    export default class Header implements BlockTool {
        save(block: HTMLElement);
        render(): HTMLElement;
    }
}