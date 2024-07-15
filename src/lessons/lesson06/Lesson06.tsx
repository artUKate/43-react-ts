function Lesson06() {
  // * TypeScript

  // * 1. string

  let username: string = 'Bob';
  username = 'Harry';
  // username = 100
  console.log(username);

  // * 2. number

  let number: number = 42;
  number = 7.1;
  number = NaN;
  number = 2 + Number('1');
  console.log(number);

  // * boolean

  let isAdmin: boolean = false;
  isAdmin = true;
  isAdmin = 2 > 3;
  console.log(isAdmin);


  // * null / undefined

  let emptyValue: null = null;
  // emptyValue = 0
  console.log(emptyValue);

  let empty: undefined = undefined;
  console.log(empty);


  // * arrays

  const colors: string[] = ['red', 'green', 'blue'];
  // colors.push(1)
  colors.push("");
  colors[3] = 'yellow';
  console.log(colors);


  // * functions

  const showMessage = (): void => {
    console.log('hello!');
  };

  showMessage();

  const sum = (a: number, b: number): number => {
    return a + b;
  };

  console.log(sum(4, 10));

  let result: number = sum(13, 7);
  console.log(result);


  // * objects interface

  interface IUser {
    name: string;
    age: number | string;
    isAdmin: boolean;
    // через вопросительный знак указываем необязательный ключ в объекте
    hasOwner?: boolean;
  }

  interface IAnimal {
    name: string;
    kind: string;
  }

  const tom: IUser = {
    name: 'Tom',
    age: 40,
    isAdmin: false,
    hasOwner: true
  };

  const jerry: IUser = {
    name: 'Jerry',
    age: '35',
    isAdmin: true
  };

  const sharky: IAnimal = {
    name: 'Sharky',
    kind: 'shark'
  };


  const tomAndJerry: IUser[] = [tom, jerry];

  console.log(tomAndJerry);


  console.log(jerry.hasOwner);
  console.log(sharky);
  
    return (
      <div className='lesson-container'>
        <h4>Lesson 06</h4>
        <p>Урок "TypeScript часть 1" в комментарии к коду урока</p>
      </div>
    );
  }
  
  export default Lesson06;