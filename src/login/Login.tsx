import React from "react";
import {useFormik} from "formik";

export const login = () => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values)
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            {/*<label htmlFor="login">type text</label>*/}
            <input
                id="login"
                {...formik.getFieldProps('login')}
            />
            <input
                id="password"
                {...formik.getFieldProps('password')}
            />
            <button type="submit">Submit</button>
        </form>
    );
};
