import FormGender from '../../components/FormGender/FormGender'
import LoginForm from '../../components/loginForm/LoginForm'
import styles from './lesson11.module.css'

export default function Lesson11() {
  return (
    <div className="lesson-container">
        <div className={styles.loader}></div>
    <h3 className={styles.heading}>Lesson11</h3>
    <p>Библиотека для работы с формами Formik</p>
   <FormGender/>

    </div>
  )
}

