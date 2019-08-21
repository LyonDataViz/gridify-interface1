export function prepare(dispatch) {
  const summaryEl = document.querySelector('#summary');
  const titleEl = summaryEl.querySelector('#summary-title');

  dispatch.on('select-dataset', dataset => {
    titleEl.textContent = dataset.title;
  });
}
