import { LitElement, html, css } from "lit-element";
import { styledComponent } from "../../styled-component";

@styledComponent("about-view")
export class AboutView extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: var(--lumo-space-m) var(--lumo-space-l);
      }

      h1 {
        color: green;
      }
    `;
  }

  render() {
    return html`
      <br />
      <h1>This is styled in the component</h1>
      <div class="alert">Here's an alert!</div>
    `;
  }
}
