import React from 'react'
import { Form, Formik } from 'formik'
import { FormikControl } from './formik/FormikControl'
import * as Yup from 'yup'

const radioOptions = [
    { key: "male", value: "Male" },
    { key: "female", value: "Female" } 
]

export const LoginForm = () => {

    const initialValues = {
        firstname: "",
        gender:""
    }

    const validationSchema = Yup.object({
        firstname: Yup.string().required('Firstname is Required!'),
        gender:Yup.string().required('Required!')
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
                        <FormikControl
                            control="radio"
                            name="gender"
                            label="Gender"
                            id="gender"
                            options={radioOptions}
                        />
                        <button type="submit"> Submit </button>
                    </Form>
                )
            }

        </Formik>
    )
}
