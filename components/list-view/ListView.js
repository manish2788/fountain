import listViewData from "../list-view/ListViewData.js";
export default class ListView extends HTMLElement {
  constructor() {
    super();
    this.data = this.fetchData();
  }
  fetchData() {
    return listViewData;
  }
  generateList(data) {
    let fragment = "";
    data.forEach(item => {
      const hasChildren = item.children && item.children .length;
      fragment = fragment + `<li class="${hasChildren ? "hasChildren" : ""}" id="${item.id}"><a href="#">${item.title}</a>
        ${hasChildren ? this.generateList(item.children) : ""}</li>`;
    });
    return `<ul>${fragment}</ul>`;
  }
  bindActions() {
    const listWithChildren =  document.querySelectorAll(".hasChildren");
    listWithChildren.forEach(element => {
      element.addEventListener('click', (evt) => {
        evt.stopPropagation();
        evt.target.classList.toggle("expanded");
      })
    })
  }
  connectedCallback() {
    const fragment = this.generateList(this.data);
    this.insertAdjacentHTML('beforeend', fragment);
    this.bindActions()
  }
  disconnectedCallback() {

  }
}