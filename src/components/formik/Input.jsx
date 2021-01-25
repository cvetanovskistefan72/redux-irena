import React from 'react'
import { Field, ErrorMessage } from 'formik'

export const Input = (props) => {
    const { id, label, name } = props
    return (
        <div>
            <label>{label}</label>
            <Field name={name} id={id} />
            <ErrorMessage name={name} component="p"/>
        </div>
    )
}
