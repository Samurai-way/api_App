import {Dispatch} from "redux";
import {axiosAPI} from "./api";

type InitialStateType = typeof initialState
type ActionsType = setDATA

type setDATA = ReturnType<typeof setDATAAC>
// type deleteUser = ReturnType<typeof deleteUserAC>
// type createUser = ReturnType<typeof createUserAC>


export type DataType = {
    id: number,
    name: string
    image: string
}

export const initialState = [] as DataType[]


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    // debugger
    switch (action.type) {
        case 'GET-USERS':
            return action.users
        // case 'DELETE-USER':
        //     return state.filter(u => u.id !== action.id)
        // case 'CREATE-USER':
        //     return state
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

// export const deleteUserAC = (id: number) => {
//     return {
//         type: 'DELETE-USER',
//         id
//     } as const
// }

// export const createUserAC = (name: string) => {
//     return {
//         type: 'CREATE-USER',
//         name
//     } as const
// }

export const incrementThunkAC = () => (dispatch: Dispatch, getState: () => void) => {
    axiosAPI.get().then(res => console.log(res.data))
        // dispatch(setDATAAC(res.data)))
}

// export const deleteUserThunkAC = (id: number) => (dispatch: Dispatch, getState: () => void) => {
//     dispatch(deleteUserAC(id))
// }
//
// export const createUserThunkAC = (name: string) => (dispatch: Dispatch, getState: () => void) => {
//     axiosAPI.post(name, 'google').then(res => dispatch(createUserAC(name)))
// }