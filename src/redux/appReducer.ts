import {Dispatch} from "redux";
import {axiosAPI} from "./api";

type InitialStateType = typeof initialState

type getItemsAC = ReturnType<typeof getItemsAC>
type skipItems = ReturnType<typeof skipItemsAC>
type deleteItem = ReturnType<typeof deleteItemAC>

type ActionsType = getItemsAC | skipItems | deleteItem


export type PostsDataType = {
    userId: number
    id: number
    title: string
    body: string
}

export const initialState = {
    items: [] as PostsDataType[]
}


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "GET-ITEMS":
            return {
                ...state,
                items: action.items
            }
        case "SKIP-ITEMS":
            return {
                ...state,
                items: action.data
            }
        case "DELETE-POST":
            return {
                ...state,
                items: state.items.filter(i => i.id !== action.id)
            }
        default:
            return state
    }
}

export const deleteItemAC = (id: number) => {
    return {
        type: 'DELETE-POST',
        id
    } as const
}

export const deleteItemThunk = (id: number) => (dispatch: Dispatch) => {
    axiosAPI.delete(id)
        .then((res)=>{
            dispatch(deleteItemAC(id))
        })
}

export const getItemsAC = (items: []) => {
    return {
        type: 'GET-ITEMS',
        items
    } as const
}
export const skipItemsAC = (data: []) => {
    return {
        type: 'SKIP-ITEMS',
        data
    } as const
}
export const getItemsThunk = () => (dispatch: Dispatch) => {
    axiosAPI.get()
        .then((res) => {
            dispatch(getItemsAC(res.data))
        })
}
export const skipDataThunk = () => (dispatch: Dispatch) => {
    dispatch(skipItemsAC([]))
}
