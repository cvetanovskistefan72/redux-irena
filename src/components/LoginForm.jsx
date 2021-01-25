import React from 'react'
import { Form, Formik } from 'formik'
import { FormikControl } from './formik/FormikControl'
import * as Yup from 'yup'


export const LoginForm = () => {

    const initialValues = {
        firstname: "",
    }

    const validationSchema = Yup.object({
        firstname: Yup.string().required('Firstname is Required!')
    })

    const onSubmit = (props) => {
        console.log(props)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                (formik) => (
                    <Form>
                        <FormikControl
                            control="input"
                            name="firstname"
                            label="Firstname"
                            id="firstname"
                            type="input"
                        />
                        <button type="submit"> Submit </button>
                    </Form>
                )
            }

        </Formik>
    )
}
