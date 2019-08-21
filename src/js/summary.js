const MAX_ROWS = 100;
async function fillTable(tableEl, dataset) {
  const previousHandsontableEl = tableEl.querySelector('.handsontable');
  if (previousHandsontableEl) {
    previousHandsontableEl.remove();
  }
  const handsontableEl = document.createElement('div');
  tableEl.append(handsontableEl);

  const data = await dataset.data.then(data => data.slice(0, MAX_ROWS));

  var hotSettings = {
    data: data,
    columns: dataset.raw.attributes.map(att => {
      // Add dates
      return {
        data: att.name,
        type: att.type === 'quantitative' ? 'numeric' : 'text',
      };
    }),
    stretchH: 'all',
    width: 880,
    autoWrapRow: true,
    height: 487,
    autoColumnSize: {
      samplingRatio: 23,
    },
    filters: true,
    dropdownMenu: true,
    rowHeaders: true,
    colHeaders: dataset.raw.attributes.map(att => att.name),
    columnSorting: {
      indicator: true,
    },
    licenseKey: 'non-commercial-and-evaluation',
  };

  // eslint-disable-next-line no-undef
  new Handsontable(handsontableEl, hotSettings);
}

export function prepare(dispatch) {
  const summaryEl = document.querySelector('#summary');
  const titleEl = summaryEl.querySelector('#summary-title');
  const tableEl = summaryEl.querySelector('#summary-table');

  dispatch.on('select-dataset', dataset => {
    titleEl.textContent = `${dataset.title} - ${MAX_ROWS} first rows`;
    fillTable(tableEl, dataset);
  });
}
