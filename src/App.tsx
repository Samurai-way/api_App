import React from 'react';
import a from './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {getItemsThunk, PostsDataType, skipDataThunk, skipItemsAC} from "./redux/appReducer";


function App() {

    const dispatch = useDispatch()
    const items = useSelector<AppRootStateType, Array<PostsDataType>>(state => state.items.items)

    const itemsData = items.map(i => <ul key={i.id}>
            <li>id:{i.id}</li>
            <li>body:{i.body}</li>
            <li>title:{i.title}</li>
            <li>userId:{i.userId}</li></ul>)


    const showButtonClick = () => {
        // @ts-ignore
        dispatch(getItemsThunk())
    }

    const skipButtonClick = () => {

        // @ts-ignore
        dispatch(skipDataThunk())
    }

    return (
        <div className={a.wrapper}>
            <button onClick={showButtonClick}>show</button>
            <button onClick={skipButtonClick}>skip</button>
            {!items.length ? <div>items over</div> : itemsData}
        </div>
    );
}

export default App;
