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
    colors[3] = 'yellow'
    console.log(colors);
  
  
    
  
  
    return (
      <div className='lesson-container'>
        <h4>Lesson 06</h4>
      </div>
    );
  }
  
  export default Lesson06;