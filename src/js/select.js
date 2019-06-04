import {get} from '@gridify/oddata';

function fillSelect(select, data) {
  data.forEach(dataset => {
    const option = document.createElement('option');
    option.value = dataset.raw.Item;
    option.text = dataset.title;
    select.appendChild(option);
  });
}

function getDataset(data, selectValue) {
  return data.find(dataset => dataset.raw.Item === selectValue);
}

function selectFirstOption(selectElement) {
  selectElement.selectedIndex = 0;
  selectElement.dispatchEvent(new Event('change'));
}

export async function prepare(dispatch) {
  const selectElement = document.querySelector('select#datasets-list');
  const data = await get();
  fillSelect(selectElement, data);
  selectElement.addEventListener('change', event =>
    dispatch.call('select-dataset', null, getDataset(data, event.target.value))
  );
}

export function init() {
  const selectElement = document.querySelector('select#datasets-list');
  selectFirstOption(selectElement);
}
