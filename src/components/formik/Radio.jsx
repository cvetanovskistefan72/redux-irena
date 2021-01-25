import { ErrorMessage, Field } from 'formik'
import React from 'react'

export const Radio = (props) => {
    const { id, label, name, options } = props
    return (
        <div>
            <label>{label}</label>
            <Field name={name} id={id}>
                {
                    ({field}) => {
                        
                        return options.map(({ key, value }) => (

                            <>
                                <label>{value}</label>
                                <input
                                    type="radio"
                                    {...field}
                                    key={key}
                                    value={value}
                                    checked={field.value === value} />
                            </>
                        ))
                    }
                }
            </Field>
            <ErrorMessage name={name} />
        </div>
    )
}
