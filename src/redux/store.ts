import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import {appReducer} from "./appReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    users: appReducer
})

// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunk))
// определить автоматически тип всего объекта состояния

export type RootState = ReturnType<typeof store.getState>

export type AppRootStateType = ReturnType<typeof rootReducer>

// export type AppDispatch = typeof store.dispatch
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore

window.store = store

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>