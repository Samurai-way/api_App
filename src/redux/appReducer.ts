import {Dispatch} from "redux";
import {axiosAPI} from "./api";

type InitialStateType = typeof initialState
type ActionsType = setDATA | deleteUser

type setDATA = ReturnType<typeof setDATAAC>
type deleteUser = ReturnType<typeof deleteUserAC>



export type DataType = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export const initialState = [] as DataType[]




export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    // debugger
    switch (action.type) {
        case 'GET-USERS':
            return action.users
        case 'DELETE-USER':
            return state.filter(u => u.id !== action.id)
        default:
            return state
    }
}



export const setDATAAC = (users: []) => {
    debugger
    return {
        type: 'GET-USERS',
        users
    } as const
}

export const deleteUserAC = (id: number) => {
    return{
        type: 'DELETE-USER',
        id
    }as const
}

export const incrementThunkAC = () => (dispatch: Dispatch, getState: () => void) => {
    axiosAPI.get().then(res =>
        dispatch(setDATAAC(res.data.data)))
}

export const deleteUserThunkAC = (id: number) => (dispatch: Dispatch, getState: () => void) => {
    dispatch(deleteUserAC(id))
}