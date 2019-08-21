import {updateSelect as updateColumnSelect} from './column';
import {update as updateDisplay} from './display';

export function prepare(dispatch) {
  dispatch.on('select-dataset.grid', updateColumnSelect(dispatch));
  dispatch.on('select-column.grid', updateDisplay);
}
