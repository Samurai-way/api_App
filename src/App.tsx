import React, {useState} from 'react';
import a from './App.module.css';
import {useAppDispatch, useAppSelector} from "./hooks/app/hooks";
import {DataType, incrementThunkAC} from "./redux/appReducer";


function App() {
    const [json, setJson] = useState<DataType[]>([])
    const dispatch = useAppDispatch()
    const users = useAppSelector<DataType[]>(state => state.users)

    // const [name, setName]=useState('')
    const showUsers = () => {
        fetch('https://backsamurai.herokuapp.com/person')
            .then(response => response.json())
            .then(json => setJson(json))
        // dispatch(incrementThunkAC())
    }

    // const deleteUserClick = (id: number) => {
    //     dispatch(deleteUserThunkAC(id))
    // }
    //
    // const createNameClick = () => {
    //     dispatch(createUserThunkAC(name))
    // }
    //
    // const oncChangeSetName = (e: ChangeEvent<HTMLInputElement>) => {
    //     setName(e.currentTarget.value)
    // }

    return (
        <div className={a.wrapper}>
            <div>
                {/*<input placeholder={'name'} onChange={oncChangeSetName} value={name}/>*/}
                {/*<button onClick={createNameClick}>create name</button>*/}
            </div>
            <div className={a.container}>
                <div className={a.users}>
                    {/*{*/}
                    {/*    !users.length ? 'it is over' : users.map(u => <div>*/}
                    {/*        <div>id: {u.id}</div>*/}
                    {/*        <div>name: {u.name}</div>*/}
                    {/*        <img src={u.image}/>*/}
                    {/*    </div>)*/}
                    {/*}*/}
                    {
                        json.map(j =>
                            <li>
                                <div>id:{j.id}</div>
                                <div>name:{j.name}</div>
                                <div><img src={j.image}/></div>
                            </li>
                        )
                    }
                </div>
            </div>
            <div>users: {users.length}</div>
            <button onClick={showUsers}>show</button>
        </div>
    );
}

export default App;
