import React from 'react';
import a from './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {deleteItemThunk, getItemsThunk, postItemThunk, PostsDataType, skipDataThunk} from "./redux/appReducer";
import {useFormik} from "formik";


function App() {

    const dispatch = useDispatch()
    const items = useSelector<AppRootStateType, Array<PostsDataType>>(state => state.items.items)


    const itemsData = items.map(i => <ul key={i.id}>
            <li>id:{i.id}</li>
            <li>body:{i.body}</li>
            <li>title:{i.title}</li>
            <li>userId:{i.userId}</li>
            <button onClick={()=>{ // @ts-ignore
                dispatch(deleteItemThunk(i.id))}}>delete</button>
    </ul>)



    const showButtonClick = () => {
        // @ts-ignore
        dispatch(getItemsThunk())
    }
    const skipButtonClick = () => {
        // @ts-ignore
        dispatch(skipDataThunk())
    }
    const formik = useFormik({
        initialValues: {
            title: '',
            body: '',
            userId: 0
        },
        onSubmit: values => {
            // @ts-ignore
            dispatch(postItemThunk(JSON.stringify(values)))
            console.log(values)
        },
    })
    return (
        <div className={a.wrapper}>

            <div>
                <form onSubmit={formik.handleSubmit}>
                    <input
                        id="title"
                        {...formik.getFieldProps('title')}
                    />
                    <input
                        id="body"
                        {...formik.getFieldProps('body')}
                    />
                    <input
                        type={'number'}
                        id="userId"
                        {...formik.getFieldProps('userId')}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>

            <button onClick={showButtonClick}>show</button>
            <button onClick={skipButtonClick}>skip</button>
            {!items.length ? <div>items over</div> : itemsData}
        </div>
    );
}



export default App;
