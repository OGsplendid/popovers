export default class Widget {
  constructor(element) {
    this.element = element;
    this.popup = document.querySelector('.popup');

    this.onBtnClick = this.onBtnClick.bind(this);
    this.element.addEventListener('click', this.onBtnClick);
  }

  onBtnClick(e) {
    if (!e.target.classList.contains('button')) {
      return;
    }
    const button = e.target.closest('.container').querySelector('.button');
    const { top } = button.getBoundingClientRect();
    const popupBottom = top - 70;
    this.popup.style.bottom = popupBottom + 'px';
    this.popup.classList.toggle('hidden');
  }
}
