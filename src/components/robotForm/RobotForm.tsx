import { useFormik } from 'formik';
import styles from './robotForm.module.css';
import * as Yup from 'yup'



// типизация значений в форме

interface IFormValues {
  model: string;
  creator: string;
  email: string;
}


const schema = Yup.object().shape({
  model: Yup
  .number()
  .typeError('введи свой номер, робот')
  .required('напиши свою модель')
  .min(100, 'твоя модель должна начинаться с 100')
  .max(1000, 'ты не такой робот! модель до 1000...'),
  creator: Yup
  .string()
  .required('скажи, кто твой создатель'),
  email: Yup
  .string()
  .email('некорректный формат email')
  .required('email вашей компании обязателен!')
});


export default function RobotForm() {

 

  // вызываем хук функцию useFormik и передаем объект с настройками
  // результат вызова кладем в переменную formik

  const formik = useFormik({
    // передаем начальные значения для формы
    // типизируем значение по ключу через оператор as

    initialValues: {
      model: '',
      creator: '',
      email: ''
    } as IFormValues,

    validationSchema: schema,
    validateOnChange: false,

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
    <>
    <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
      <label >Это форма для робота</label>
      <input value={formik.values.model} name='model' onChange={formik.handleChange} type="text" placeholder='ваша модель' />
      <input value={formik.values.creator} name='creator' onChange={formik.handleChange} type="text" placeholder='имя создателя' />
      <input value={formik.values.email} name='email' onChange={formik.handleChange} type="text" placeholder='email производителя' />
      <button type='submit'>отправить</button>
    
    </form>
    
 <span className={styles.errors}> {formik.errors.model}</span>
 <span className={styles.errors}> {formik.errors.creator}</span>
 <span className={styles.errors}> {formik.errors.email}</span>
 </>
  );
}