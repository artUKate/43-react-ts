import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import styles from './myForm.module.css'

export default function MyForm() {

  return (
    <form className={styles.myForm}>
      <MyInput label={'Ваш логин:'} placeholder={'login'} type={'text'} name={'login'} />
      <MyInput label={'Действительная почта:'} placeholder={'email'} type={'email'} name={'email'}  />
      <MyInput label={'Ваш пароль:'} placeholder={'password'} type={'password'} name={'password'} />
      <MyButton name={'Отправить форму'} type={'submit'}  />
    </form>
  );
}