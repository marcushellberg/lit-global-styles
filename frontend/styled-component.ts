import { Constructor, unsafeCSS } from "lit-element";
import globalStyles from "./global-styles.css";
export const styledComponent = (tagName: string) => (
  element: Constructor<HTMLElement>
) =>
  window.customElements.define(
    tagName,
    class extends element {
      static get styles() {
        return [
          unsafeCSS(globalStyles),
          //@ts-ignore
          super.styles,
        ];
      }
    }
  );
