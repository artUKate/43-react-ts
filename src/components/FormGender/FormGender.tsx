import React, { useState } from 'react'
import styles from './formGender.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'


interface IFormGender{
    name: string;
}

const schema = Yup.object().shape({
 name: Yup
    .string()
    .typeError('Incorrect data type')
    .required()
    .matches(/^[a-zA-Z\s]+$/, 'Please do not use number symbols')
})


export default function FormGender() {
const [gender, setGender] = useState('');
const [nameResult, setNameResult] = useState('');


  const formik = useFormik({
    initialValues: {
        name: ''
    } as IFormGender,
    validationSchema: schema,
    validateOnChange: false,
onSubmit: (values: IFormGender, {resetForm})=>{
   console.log(values);
   
     fetch (`https://api.genderize.io/?name=${values.name}`)
    .then((res)=> res.json())
    .then(data => { 
        setGender(data.gender);             
        setNameResult(data.name); 
  
});
  resetForm();
}
  });

 

    return (
      <form onSubmit={formik.handleSubmit} className={styles.formGender}>
      <div>Form Gender 🪄</div>
      <div className={styles.inputContainer}>
        <input
          value={formik.values.name}
          name='name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder='Enter Name'
        />
        {formik.errors.name && (
          <div className={styles.errorMessage}>{formik.errors.name}</div>
        )}
      </div>
      <button type='submit'>отправить</button>
      {gender && nameResult &&
        <div className={styles.genderInfo}>
          <p>Name: {nameResult}</p>
          <p>Gender: {gender}</p>
        </div>
      }
    </form>
  )
}