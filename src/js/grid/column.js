function init() {
  const selectElement = document.querySelector('select#grid-controls-column');
  selectElement.dispatchEvent(new Event('change'));
}

export function fillSelect(selectEl, dataset) {
  selectEl.querySelectorAll('option').forEach(opt => opt.remove());
  dataset.raw.attributes.forEach(att => {
    const option = document.createElement('option');
    option.value = att.name;
    option.text = att.name;
    selectEl.appendChild(option);
  });
}

export function updateSelect(dispatch) {
  return dataset => {
    const gridControlsColumnEl = document.querySelector(
      '#grid-controls-column'
    );
    fillSelect(gridControlsColumnEl, dataset);
    // Note: a new event listener is created every time the selection changes in
    // the datasets <select>. See https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    // It might be improved.
    gridControlsColumnEl.addEventListener('change', event =>
      dispatch.call('select-column', null, {
        dataset: dataset,
        column: event.target.value,
      })
    );
    init();
  };
}
