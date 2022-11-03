import {Dispatch} from "redux";

type ActionsType = setText
type InitialStateType = typeof initialState
const initialState = {
    text: ''
}

export const testReducer = (state: InitialStateType = initialState, action: ActionsType):InitialStateType=>{
    switch (action.type) {
        case 'SET-TEXT':
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}

type setText = ReturnType<typeof setTextAC>
export const setTextAC = (text: string)=>{
    return{
        type: 'SET-TEXT',
        text
    }as const
}
export const setTextThunk =(text: string)=>(dispatch: Dispatch)=>{
    dispatch(setTextAC(text))
}