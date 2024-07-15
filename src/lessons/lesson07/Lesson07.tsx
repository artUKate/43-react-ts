import Counter from "../../components/counter/Counter";
import MyButton from "../../components/myButton/MyButton";

function Lesson07() {
    // типизация примитивный тип данных
    let hero: string = 'batman';
    console.log(hero);
    // типизация объекта
    interface ISuperhero {
      id: number;
      name: string;
      nickname: string;
      // age может быть и строкой и числом
      // такое объединение называется union type
      age?: number | string;
      abilities?: string[];
    }
    // наследование типов в ts
    interface ISpaceHeroes extends ISuperhero {
      homePlanet: string;
    }
    // создание объекта с типом
    let hero1: ISpaceHeroes = {
      id: 1,
      name: 'Clark Kent',
      nickname: 'Superman',
      abilities: ['super vision', 'can fly'],
      homePlanet: 'Crypton'
    };
    // другой экземпляр объекта с нашим типом
    let hero2: ISuperhero = {
      id: 2,
      name: 'Bruce Wane',
      nickname: 'Batman',
      // этот ключ можно было бы и не указать
      // потому что у ISuperhero ‘abilities’ - не обязательный ключ
      abilities: []
    };
    // массив из объектов с нашим типом
    const heroes: ISuperhero[] = [hero1, hero2];
    
    interface ISpaceHeroes {
        isAlive?: boolean
    }
    type Animal ={
        name: string;
        weight: number;
    };

    
    console.log(heroes);


const handleHello = () => {
    console.log ('Hello')
}

    return (
      <div className='lesson-container'>
        <h4>Lesson 07</h4>
        <p>Урок 'TypeScript часть 2' в комментариях к коду урока :lion_face:</p>
        <div>
          {heroes.map(el => (
            <div key={el.id}>
              <h4>:male_superhero:: {el.nickname}</h4>
              <p>Real name: {el.name}</p>
            </div>
          ))}
        </div>
        <div>
            <MyButton/>
            <MyButton name='click' onClick={() => console.log('click!')}/>
            <MyButton name='submit'/>
        </div>
        <Counter/>
      </div>
    );
  }
  export default Lesson07;