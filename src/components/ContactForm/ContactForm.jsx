import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from 'nanoid'
import { useId } from "react";

import css from "./ContactForm.module.css"

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .trim()
        .min(3, "Too Short!").max(50, "Too Long!")
        .required("Required"),
    number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
        .required("Required"),
});

export default function ContactForm({ onAdd }) { 

    const usernameId = useId();
    const userNumberId = useId();

    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,
        });
        
		actions.resetForm();
	};
    
        return (
            <Formik initialValues={{
                name: "",
                number: "",
            }}
                onSubmit={handleSubmit}
            validationSchema={ContactSchema}>
                
                <Form className={css.form}>
                    <div className={css.contactFormFieldWrapper}>
                        <label htmlFor={usernameId}>Name</label>
                    <Field className={css.input} type="text" name="name" id={usernameId} />
                      <ErrorMessage className={css.errorMsg} name="name" component="span" />
                    </div>
                     <div className={css.contactFormFieldWrapper}><label htmlFor={userNumberId}>Number</label>                  
                    <Field className={css.input} type="text" name="number" id={userNumberId} />
                      <ErrorMessage className={css.errorMsg} name="number" component ="span" /></div>
                       
                    <button className={css.addBtn} type="submit">Add contact</button>
                </Form>
    </Formik>
  );
    
}


