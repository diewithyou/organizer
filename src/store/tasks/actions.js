import * as types from '../action-types';
import * as mutations from '../mutation-types';

export default {
    [types.OPEN_DIALOG_EDIT_TASK] ({ commit, state }, taskId) {
      console.log('a', commit);
      console.log('b', state);
      console.log('c', taskId);
        setTimeout(() => {
            commit(mutations.OPEN_DIALOG, taskId);
       })
    },
}
