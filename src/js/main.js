import {
  createDataset,
  getMetadataFile,
  getMetadataFilesList,
} from '@gridify/kernel/src/index.js';
import {fetchRelativeJson} from './fetch.js';

async function fillSelect() {
  const list = await getMetadataFilesList(fetchRelativeJson, 'dataset.json');
  const select = document.querySelector('select#datasets-list');
  list.forEach(async metadataFile => {
    try {
      const rawMetadata = await getMetadataFile(
        fetchRelativeJson,
        metadataFile
      );
      const metadata = createDataset(rawMetadata);
      const option = document.createElement('option');
      option.value = metadata.file;
      option.text = metadata.name;
      select.appendChild(option);
    } catch (error) {
      if (error instanceof SyntaxError) {
        // eslint-disable-next-line no-console
        console.warn(metadataFile + ' is a badly formatted JSON - ignored.');
      } else {
        throw error;
      }
    }
  });
}

fillSelect();
