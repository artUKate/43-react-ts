import styles from "./myInput.module.css";

interface IInputProps {
  label?: string;
  name?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
}

export default function MyInput({ label = 'default', name='input', type='text', placeholder='default' }: IInputProps) {

  return (
    <>
      <label className={styles.label}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </>
  );
}