import Widget from '../Widget/Widget';

test('widget remove hidden class', () => {
  document.body.innerHTML = '<div class="common-container"></div>';

  const container = document.querySelector('.common-container');
  const widget = new Widget(container);

  widget.bindToDOM();

  widget.button.click();

  expect(widget.popup.classList.contains('hidden')).toEqual(false);
});
