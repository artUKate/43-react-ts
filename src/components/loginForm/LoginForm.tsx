import { useFormik } from 'formik';
import styles from './loginForm.module.css';

// типизация значений в форме
interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}


export default function LoginForm() {
  // вызываем хук функцию useFormik и передаем объект с настройками
  // результат вызова кладем в переменную formik
  const formik = useFormik({
    // передаем начальные значения для формы
    // типизируем значение по ключу через оператор as
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    } as IFormValues,
    // описываем действие с данными при нажатии на кнопку с типом submit
    onSubmit: (values: IFormValues, { resetForm }) => {
      // ! это ключевой код логики формы
      // ! здесь мы описываем то, что произойдет со значениями после нажатия на кнопку submit
      // проверяем, что к нам пришли значения из формы
      console.log(values);
      resetForm();
    }
  });

  // ! что нужно заполнить в форме
  // 1. для form добавить на onSubmit formik.handleSubmit
  // 2. для input добавить в onChange formik.handleChange
  // 3. для input добавить в name имя соответствующее ключу в объекте initialValues из настроек
  // 4. для input добавить в value значение его поля из formik.values



  return (
    <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
      <input value={formik.values.firstName} name='firstName' onChange={formik.handleChange} type="text" placeholder='first name' />
      <input value={formik.values.lastName} name='lastName' onChange={formik.handleChange} type="text" placeholder='last name' />
      <input value={formik.values.email} name='email' onChange={formik.handleChange} type="text" placeholder='email' />
      <button type='submit'>отправить</button>
    </form>

  );
}