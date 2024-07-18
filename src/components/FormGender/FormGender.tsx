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
      <>
        <form onSubmit={formik.handleSubmit} className={styles.formGender}>
    <div>FormGender</div>
    <input value ={formik.values.name} 
    name = 'name' 
    onChange={formik.handleChange}
    type="text"
    placeholder='Enter Name'/>
    <button type = 'submit'>отправить</button>
    {gender && nameResult &&
                <div className={styles.genderInfo}>
                    <p>Name: {nameResult}</p>
                    <p>Gender: {gender}</p>
                </div>
            }
    </form>
    <span className={styles.errors}>{formik.errors.name}</span>
    </>
  )
}
