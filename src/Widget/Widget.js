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

  static get tooltip() {
    return `
      <div class="popup hidden">
        <div class="title-container">
          <span class="popup-title">Popover title</span>
        </div>
        <span class="popup-text">Some tooltip here</span>
      </div>
    `;
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
    if (document.querySelector('.popup')) {
      document.querySelector('.popup').remove();
      return;
    }
    const button = this.parentEl.querySelector('.button');
    const { top, left } = button.getBoundingClientRect();
    document.body.insertAdjacentHTML('afterbegin', Widget.tooltip);
    const popup = document.querySelector('.popup');
    popup.style.top = `${top - 100}px`;
    console.log(button.offsetWidth, popup.style);
    popup.style.left = `${left + button.offsetWidth / 2 - 120}px`;
    popup.classList.toggle('hidden');
  }
}
