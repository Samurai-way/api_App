import React, {ChangeEvent, useState} from 'react';
import a from './App.module.css';
import {useAppDispatch, useAppSelector} from "./hooks/app/hooks";
import {createUserThunkAC, DataType, deleteUserThunkAC, incrementThunkAC} from "./redux/appReducer";


function App() {

    const dispatch = useAppDispatch()
    const users = useAppSelector<DataType[]>(state => state.users)

    const [name, setName]=useState('')
    const showUsers = () => {
        dispatch(incrementThunkAC())
    }

    const deleteUserClick = (id: number) => {
        dispatch(deleteUserThunkAC(id))
    }

    const createNameClick = () => {
        dispatch(createUserThunkAC(name))
    }

    const oncChangeSetName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    return (
        <div className={a.wrapper}>
            <div>
                <input placeholder={'name'} onChange={oncChangeSetName} value={name}/>
                <button onClick={createNameClick}>create name</button>
            </div>
            <div className={a.container}>
                <div className={a.users}>
                    {
                        !users.length ? 'it is over' : users.map(u => <div>
                            <div>id: {u.id}</div>
                            <div>first_name: {u.first_name}</div>
                            <img src={u.avatar}/><button onClick={()=>deleteUserClick(u.id)}>delete</button>
                        </div>)
                    }
                </div>
            </div>
            <div>users: {users.length}</div>
            <button onClick={showUsers}>show</button>
        </div>
    );
}

export default App;
