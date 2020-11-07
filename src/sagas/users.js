import  {takeEvery, call , fork, put}  from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers() {
    
const result = yield call(api.getUsers);
console.log(result.data.data);
               yield put(actions.getUsersSuccess({
                        items: result.data.data}))
    
    
}

function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const userSagas = [
    fork(watchGetUsersRequest)
];

export default userSagas;