import * as act from './actions';
import * as select from './selectors';

export { useStoreWithGlobalDispatch, dispatch } from "./globalDispatch";
export {initialState} from './initialState';

export const actions = act;
export const selectors = select;

