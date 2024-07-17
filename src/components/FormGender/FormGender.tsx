import React, { useState } from 'react'
import styles from './formGender.module.css'
import { useFormik } from 'formik'

interface IFormGender{
    name: string;
}


export default function FormGender() {
const [gender, setGender] = useState('');
const [nameResult, setNameResult] = useState('');


  const formik = useFormik({
    initialValues: {
        name: ''
    } as IFormGender,

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
  )
}
