import { buildActionCreator } from '../propsUtils';

const PREFIX = 'IMAGEHOTSPOT';

const ASYNC_OP_START = `${PREFIX}/ASYNC_OP_START`;
const ASYNC_OP_END = `${PREFIX}/ASYNC_OP_END`;
const ASYNC_OP_RESET_STATUS = `${PREFIX}/ASYNC_OP_RESET_STATUS`;
const CENTRALSTUDIO_INIT = `${PREFIX}/INIT`;

const TOGGLE_MODAL = `${PREFIX}/TOGGLE_MODAL`;

const init = buildActionCreator(CENTRALSTUDIO_INIT);
const startAsyncOp = buildActionCreator(ASYNC_OP_START);
const endAsyncOp = buildActionCreator(ASYNC_OP_END);
const resetAsyncOp = buildActionCreator(ASYNC_OP_RESET_STATUS);


const toggleModal = buildActionCreator(TOGGLE_MODAL);

export const Actions = {
  init,
  startAsyncOp,
  endAsyncOp,
  resetAsyncOp,
  toggleModal
};

export const ActionTypes = {
  CENTRALSTUDIO_INIT,
  ASYNC_OP_START,
  ASYNC_OP_END,
  ASYNC_OP_RESET_STATUS,
  TOGGLE_MODAL
};
