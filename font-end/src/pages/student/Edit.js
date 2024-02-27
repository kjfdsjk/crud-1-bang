import { useNavigate, useParams } from "react-router";
import React, { useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from "formik";

export default function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/students/${id}`)
            .then((res) => {
                const { name, description, score, action } = res.data;
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    return (
        <Formik
            initialValues={{
                name: '',
                description: '',
                score: '',
                action: ''
            }}
            onSubmit={(values) => {
                axios.put(`http://localhost:8080/students/${id}`, values)
                    .then(() => {
                        alert('Thành công');
                        navigate('/');
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }}
        >
            <Form>
                <Field name='name' />
                <Field name='description' />
                <Field name='score' />
                <Field name='action' />
                <button type='submit'>Create</button>
            </Form>
        </Formik>
    );
}
