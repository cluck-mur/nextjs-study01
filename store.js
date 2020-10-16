import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

const initialState = {
    memoList: []
}

export const actionTypes = {
    CREATE: 'CREATE',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE:
            let memoList = state.memoList
            memoList.push(action.data.memo)
            return {
                ...state,
                memoList
            }
        default:
            return state
    }
}

export const createMemo = (memo) => {
    return {
        type: actionTypes.CREATE,
        data: {
            memo
        }
    }
}

export const deleteMemo = (index) => {
    return { Type: actionTypes.DELETE, data: index}
}

//export function initializeStore (initialState = initialState) {
export function initializeStore (initialState) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(logger))
    )
}