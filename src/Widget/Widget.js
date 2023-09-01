export default class Widget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.element = parentEl.querySelector('.common-container');

    this.onBtnClick = this.onBtnClick.bind(this);
  }

  static get markup() {
    return `
    <div class="container">
      <button class="button" type="button">Click to toggle popover</button>
      <div class="popup hidden">
        <div class="title-container">
          <span class="popup-title">Popover title</span>
        </div>
        <span class="popup-text">Some tooltip here</span>
      </div>
    </div>
    `;
  }

  static get button() {
    return '.button';
  }

  static get popup() {
    return '.popup';
  }

  static get selector() {
    return '.container';
  }

  bindToDOM() {
    this.parentEl.innerHTML = Widget.markup;

    this.element = this.parentEl.querySelector(Widget.selector);
    this.button = this.element.querySelector(Widget.button);
    this.popup = this.element.querySelector(Widget.popup);

    this.element.addEventListener('click', this.onBtnClick);
  }

  onBtnClick(e) {
    if (!e.target.classList.contains('button')) {
      return;
    }
    const { top } = this.button.getBoundingClientRect();
    const popupBottom = top - 70;
    this.popup.style.bottom = `${popupBottom}px`;
    this.popup.classList.toggle('hidden');
  }
}
