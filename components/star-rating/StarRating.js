import starTemplate from '../star-rating/template.js';

export default class StarRating extends HTMLElement {
  constructor() {
    super();
    this.props = {
      scale : null,
      fragment: null
    }
  }
  static observedAttributes = ["data-rating-scale"];

  attributeChangedCallback(name, oldVal, newVal) {
    if(name === 'data-rating-scale') {
      this.props.scale = Number(newVal);
    }
  }
  render() {
    let fragment = "";
    for(let i = 0; i < this.props.scale; i++) {
      fragment = fragment + starTemplate;
    }
    this.innerHTML = `<button type="button">${fragment}</button>`;
    console.log("Rendered");
  }
  connectedCallback() {
    console.log("Connected");
    this.render();
  }
}