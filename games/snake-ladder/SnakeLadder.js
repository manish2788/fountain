export default class SnakeLadder extends HTMLElement {
  constructor() {
    super();
  }
  render() {
    let fragment = "", counter = 0;
    while(counter < 100) {
      for(let i = 1; i <= 10 ; i++) {
        fragment = fragment + `<div class="data-cell">${i+counter}</div>`;
      }
      counter = counter + 10;
    }
    return fragment;
  }
  connectedCallback() {
    this.innerHTML = this.render();
  }
}