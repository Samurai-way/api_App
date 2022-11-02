import {Dispatch} from "redux";
import {axiosAPI} from "./api";

type InitialStateType = typeof initialState

type getItemsAC = ReturnType<typeof getItemsAC>
type skipItems = ReturnType<typeof skipItemsAC>
type deleteItem = ReturnType<typeof deleteItemAC>
type postItem = ReturnType<typeof postItemAC>

type ActionsType = getItemsAC | skipItems | deleteItem | postItem


export type PostsDataType = {
    userId: number
    id: number
    title: string
    body: string
}

export const initialState = {
    items: [] as PostsDataType[],
    data: {}
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
        case "POST-ITEM":
        return {
            ...state,
            data: action.body,
            items: state.items
        }
        default:
            return state
    }
}

export const postItemAC = (body: { title: string, body: string, userId: number }) => {
    return {
        type: 'POST-ITEM',
        body
    } as const
}

export const postItemThunk = (body: { title: string, body: string, userId: number }) => (dispatch: Dispatch) => {
    axiosAPI.post(body)
        .then((res)=>{
            dispatch(postItemAC(res.data))
        })
}

export const deleteItemAC = (id: number) => {
    return {
        type: 'DELETE-POST',
        id
    } as const
}

export const deleteItemThunk = (id: number) => (dispatch: Dispatch) => {
    axiosAPI.delete(id)
        .then((res) => {
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
