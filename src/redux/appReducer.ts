import {Dispatch} from "redux";
import {axiosAPI} from "./api";

type InitialStateType = typeof initialState

type getItemsAC = ReturnType<typeof getItemsAC>
type skipItems = ReturnType<typeof skipItemsAC>

type ActionsType = getItemsAC | skipItems


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
        default:
            return state
    }
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
        .then((res)=>{
            dispatch(getItemsAC(res.data))
        })
}

export const skipDataThunk = () => (dispatch: Dispatch) => {
    dispatch(skipItemsAC([]))
}
