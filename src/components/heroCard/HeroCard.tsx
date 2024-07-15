import styles from './heroCard.module.css'


interface IHeroCardProps {
  name: string;
  age: number;
  isDark: boolean;
  lightsaberColors?: string[];
  image: string;
  hasMagic?: boolean
}


function HeroCard({isDark, age, name, image, lightsaberColors}: IHeroCardProps) {
  return (
    // добавляем сразу несколько классов из css module к элементу используя шаблонную строку
    <div className={`${isDark ? styles.dark : styles.light} ${styles.card}`}>
      <h4>{name}</h4>
      <p>Age: {age}</p>
      <img width={200} src={image} alt="" />
      <div>

      </div>
      <p>
        Lightsaber colors:{" "}
        {/* знак вопроса перед обращением к свойству объекта проверяет наличие этого свойства и не вызывает ошибку, если его нет */}
        {lightsaberColors?.map(color => (
          <span>{color} </span>
        ))}
      </p>
    </div>
  );
}

export default HeroCard;