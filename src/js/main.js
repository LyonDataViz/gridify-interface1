import {prepare as prepareDatasets, init as initDatasets} from './datasets';
import {prepare as prepareGrid} from './grid';
import {dispatch as d3Dispatch} from 'd3-dispatch';

async function prepare(dispatch) {
  await prepareDatasets(dispatch);
  prepareGrid(dispatch);
  initDatasets();
}

const dispatch = d3Dispatch('select-column', 'select-dataset');
prepare(dispatch);
