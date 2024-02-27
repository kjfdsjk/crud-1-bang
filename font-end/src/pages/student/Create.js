import {useNavigate} from "react-router";
import React, {useState} from 'react';
import axios from 'axios';
import {Field, Form, Formik} from "formik";

export default function Create() {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    score: '',
                    action: ''
                }}
                onSubmit={(values) => {
                    axios.post('http://localhost:8080/students', values)
                        .then((res) => {
                            alert('Thành công');
                            navigate('/')
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                }}
            >
                <Form>
                    <Field name={'name'}></Field>
                    <Field name={'description'}></Field>
                    <Field name={'score'}></Field>
                    <Field name={'action'}></Field>
                    <button>Create</button>
                </Form>
            </Formik>
        </>

    )
        ;
}