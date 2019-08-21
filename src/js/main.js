import {prepare as prepareSelect, init as initSelect} from './select';
import {prepare as prepareSummary} from './summary';
import {dispatch as d3Dispatch} from 'd3-dispatch';

const dispatch = d3Dispatch(['select-dataset']);

prepareSelect(dispatch).then(() => {
  prepareSummary(dispatch);
  initSelect();
});
