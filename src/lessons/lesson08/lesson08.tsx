import MyForm from '../../components/myForm/MyForm';
import MyInput from '../../components/myInput/MyInput';

const Lesson08 = () => {
  return (
    <div className='lesson-container'>
      <h3>Lesson 08</h3>
      <h4>Homework</h4>
      <p>Один и тот же компонент с типизированными props, но с разными данными: </p>
      <MyInput />
      <MyInput label='pass' name='password' placeholder='type your pass' type='password' />
      <h4>CSS modules</h4>
      <p>Способ написания изолированных CSS стилей в React, чтобы стили не конфликтовали друг с другом</p>

      <MyForm />

    </div>
  );
};

export default Lesson08;

