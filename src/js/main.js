import {get} from '@gridify/oddata';

async function fillSelect() {
  const list = await get();
  const select = document.querySelector('select#datasets-list');
  list.forEach(async dataset => {
    const option = document.createElement('option');
    option.value = dataset.raw.Item;
    option.text = dataset.title;
    select.appendChild(option);
  });
}

fillSelect();
