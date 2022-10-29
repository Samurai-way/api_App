import React, {useState} from 'react';
import a from './App.module.css';
import {useAppDispatch, useAppSelector} from "./hooks/app/hooks";
import {DataType, deleteUserThunkAC, incrementThunkAC} from "./redux/appReducer";



function App() {




    const dispatch = useAppDispatch()
    const users = useAppSelector<DataType[]>(state => state.users)

    const showUsers = () => {
        dispatch(incrementThunkAC())
    }

    const deleteUserClick = (id: number) => {
        dispatch(deleteUserThunkAC(id))
    }

    return (
        <div className={a.wrapper}>
            <div className={a.container}>
                <div className={a.users}>
                    {
                        !users.length ? 'users 0' : users.map(u => <div>
                            <div>id: {u.id}</div>
                            <div>first_name: {u.first_name}</div>
                            <img src={u.avatar}/><button onClick={()=>deleteUserClick(u.id)}>delete</button>
                        </div>)
                    }
                </div>
            </div>
            <button onClick={showUsers}>show</button>
        </div>
    );
}

export default App;
