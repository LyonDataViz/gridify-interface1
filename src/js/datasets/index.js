import {prepare as prepareSelect, init as initSelect} from './select';
import {prepare as prepareSummary} from './summary';

export async function prepare(dispatch) {
  await prepareSelect(dispatch);
  prepareSummary(dispatch);
}
export async function init() {
  initSelect();
}
