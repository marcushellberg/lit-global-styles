import { showNotification } from "@vaadin/flow-frontend/a-notification";
import "@vaadin/vaadin-button";
import "@vaadin/vaadin-text-field";
import { css, html, LitElement } from "lit-element";
import { styledComponent } from "../../styled-component";

@styledComponent("hello-world-view")
export class HelloWorldView extends LitElement {
  name: string = "";

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 1em;
      }
    `;
  }
  render() {
    return html`
      <vaadin-text-field
        label="Your name"
        @value-changed="${this.nameChanged}"
      ></vaadin-text-field>
      <vaadin-button @click="${this.sayHello}">Say hello</vaadin-button>

      <div class="alert">Here's an alert!</div>
    `;
  }
  nameChanged(e: CustomEvent) {
    this.name = e.detail.value;
  }

  sayHello() {
    showNotification("Hello " + this.name);
  }
}
