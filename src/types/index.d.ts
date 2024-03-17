import { defaultTheme } from '../themes/default';

declare global {
  interface Window {
    theme: typeof defaultTheme;
  }

  module '*.svg' {
    const content: any;
    export default content;
  }

  module '*.png' {
    const content: any;
    export default content;
  }
}
