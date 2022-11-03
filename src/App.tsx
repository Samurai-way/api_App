import React, {ChangeEvent, useState} from 'react';
import a from './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {deleteItemThunk, getItemsThunk, PostsDataType, skipDataThunk} from "./redux/appReducer";
import {useFormik} from "formik";
import {useAppDispatch, useAppSelector} from "./hooks/app/hooks";
import {postDataThunk} from "./login/authReducer";
import {setTextThunk} from "./test/testReducer";


function App() {

    const dispatch = useAppDispatch()
    const text = useAppSelector(state => state.test.text)
    // const items = useSelector<AppRootStateType, Array<PostsDataType>>(state => state.items.items)
    // const auth = useAppSelector(state => state.auth.isAuth)
    //
    // const itemsData = items.map(i => <ul key={i.id}>
    //         <li>id:{i.id}</li>
    //         <li>body:{i.body}</li>
    //         <li>title:{i.title}</li>
    //         <li>userId:{i.userId}</li>
    //         <button onClick={()=>{ // @ts-ignore
    //             dispatch(deleteItemThunk(i.id))}}>delete</button>
    // </ul>)
    //
    //
    //
    // const showButtonClick = () => {
    //     // @ts-ignore
    //     dispatch(getItemsThunk())
    // }
    // const skipButtonClick = () => {
    //     // @ts-ignore
    //     dispatch(skipDataThunk())
    // }
    // const formik = useFormik({
    //     initialValues: {
    //         username: '',
    //         email: '',
    //         password: ''
    //     },
    //     onSubmit: values => {
    //         // @ts-ignore
    //         dispatch(postDataThunk(values))
    //     },
    // })

    const [message, setMessage]=useState('')

    const onChangeText = (e: ChangeEvent<HTMLInputElement>)=>{
        setMessage(e.currentTarget.value)
    }
    const onClickHandler =()=>{
        dispatch(setTextThunk(message))
        setMessage('')
    }
    return (
        <div className={a.wrapper}>
            <input onChange={onChangeText} value={message}/>
            <button onClick={onClickHandler}>send</button>
            {text}
            {/*{*/}
            {/*    auth ? <div>загрузка пошла</div> : 'жду!'*/}
            {/*}*/}
            {/*<div>*/}
            {/*    <form onSubmit={formik.handleSubmit}>*/}
            {/*        <input*/}
            {/*            id="username"*/}
            {/*            {...formik.getFieldProps('username')}*/}
            {/*        />*/}
            {/*        <input*/}
            {/*            id="email"*/}
            {/*            {...formik.getFieldProps('email')}*/}
            {/*        />*/}
            {/*        <input*/}
            {/*            type={'text'}*/}
            {/*            id="password"*/}
            {/*            {...formik.getFieldProps('password')}*/}
            {/*        />*/}
            {/*        <button type="submit">Submit</button>*/}
            {/*    </form>*/}
            {/*</div>*/}

            {/*<button onClick={showButtonClick}>show</button>*/}
            {/*<button onClick={skipButtonClick}>skip</button>*/}
            {/*{!items.length ? <div>items are over</div> : itemsData}*/}
        </div>
    );
}



export default App;
