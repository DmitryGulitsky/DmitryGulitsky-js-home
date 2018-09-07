describe('Typeof methods', () => {
  it('Typeof string Positive', () => {
    const somethingUnknown = 'abc';
    expect(typeof (somethingUnknown)).toBe('string');
  });
  it('Typeof string Negative', () => {
    const somethingUnknown = 'abc';
    expect(typeof (somethingUnknown)).toBe('number');
  });
  it('Typeof number Positive', () => {
    const somethingUnknown = 10;
    expect(typeof (somethingUnknown)).toBe('number');
  });
  it('Typeof number Negative', () => {
    const somethingUnknown = 10;
    expect(typeof (somethingUnknown)).toBe('boolean');
  });
  it('Typeof boolean Positive', () => {
    const somethingUnknown = true;
    expect(typeof (somethingUnknown)).toBe('boolean');
  });
  it('Typeof boolean Negative', () => {
    const somethingUnknown = 'abc';
    expect(typeof (somethingUnknown)).toBe('number');
  });
  it('Typeof undefined Positive', () => {
    const somethingUnknown = undefined;
    expect(typeof (somethingUnknown)).toBe('undefined');
  });
  it('Typeof undefined Negative', () => {
    const somethingUnknown = 'abc';
    expect(typeof (somethingUnknown)).toBe('number');
  });
  it('Typeof object Positive', () => {
    const somethingUnknown = {};
    expect(typeof (somethingUnknown)).toBe('object');
  });
  it('Typeof object Negative', () => {
    const somethingUnknown = 'abc';
    expect(typeof (somethingUnknown)).toBe('object');
  });
});

describe('Arithmetic operations', () => {
  it('Pre minus one Positive', () => {
    let somethingUnknown = 10;
    expect(--somethingUnknown).toBe(9);
  });
  it('Pre minus one Negative', () => {
    let somethingUnknown = 10;
    expect(--somethingUnknown).toBe(10);
  });

  it('Pre plus one Positive', () => {
    let somethingUnknown = 10;
    expect(++somethingUnknown).toBe(11);
  });
  it('Pre plus one Negative', () => {
    let somethingUnknown = 10;
    expect(++somethingUnknown).toBe('Some words');
  });

  it('Minus one Positive', () => {
    let somethingUnknown = 10;
    expect(somethingUnknown--).toBe(9);
  });
  it('Minus one Negative', () => {
    let somethingUnknown = 10;
    expect(somethingUnknown--).toBe(10);
  });

  it('Plus one Positive', () => {
    let somethingUnknown = 10;
    expect(somethingUnknown++).toBe(11);
  });
  it('Plus one Negative', () => {
    let somethingUnknown = 10;
    expect(somethingUnknown++).toBe(10);
  });

  it('Minus Positive', () => {
    let somethingUnknown = 20;
    somethingUnknown -= 10;
    expect(somethingUnknown).toBe(10);
  });
  it('Minus Negative', () => {
    let somethingUnknown = 20;
    somethingUnknown -= 10;
    expect(somethingUnknown).toBe(100);
  });

  it('Plus Positive', () => {
    let somethingUnknown = 10;
    somethingUnknown += 10;
    expect(somethingUnknown).toBe(20);
  });
  it('Plus Negative', () => {
    let somethingUnknown = 10;
    somethingUnknown += 10;
    expect(somethingUnknown).toBe(100);
  });

  it('Multiplication Positive', () => {
    let somethingUnknown = 10;
    somethingUnknown *= 10;
    expect(somethingUnknown).toBe(100);
  });
  it('Multiplication Negative', () => {
    let somethingUnknown = 10;
    somethingUnknown *= 500;
    expect(somethingUnknown).toBe(100);
  });

  it('Division Positive', () => {
    let somethingUnknown = 10;
    somethingUnknown /= 10;
    expect(somethingUnknown).toBe(1);
  });
  it('Division Negative', () => {
    let somethingUnknown = 10;
    somethingUnknown /= 10;
    expect(somethingUnknown).toBe(100);
  });
})

describe('Bonding operations', () => {
  it('Plus2 Positive', () => {
    const firstWord = 'Milky';
    const secondWord = 'way';
    expect(firstWord + secondWord).toBe('Milkyway');
  });
  it('Plus2 one Negative', () => {
    const firstWord = 'Milky';
    const secondWord = 'way';
    expect(firstWord + secondWord).toBe('Nuts');
  });
  it('Plus3 Positive', () => {
    let firstWord = 'Milky';
    const secondWord = 'way';
    firstWord += secondWord;
    expect(firstWord).toBe('Milkyway');
  });
  it('Plus3 Negative', () => {
    let firstWord = 'Milky';
    const secondWord = 'way';
    firstWord += secondWord;
    expect(firstWord).toBe('Milky way');
  });
});

describe('Comparsion operations', () => {
  it('Operation more Positive', () => {
    const firstNumber = 11;
    const secondNumber = 10;
    const operationResult = (firstNumber > secondNumber);
    expect(operationResult).toBe(true);
  });
  it('Operation more Negative', () => {
    const firstNumber = 11;
    const secondNumber = 10;
    const operationResult = (firstNumber < secondNumber);
    expect(operationResult).toBe(true);
  });
  it('Operation less Positive', () => {
    const firstNumber = 10;
    const secondNumber = 11;
    const operationResult = (firstNumber < secondNumber);
    expect(operationResult).toBe(true);
  });
  it('Operation less Negative', () => {
    const firstNumber = 11;
    const secondNumber = 10;
    const operationResult = (firstNumber < secondNumber);
    expect(operationResult).toBe(true);
  });
  it('Operation more or equally Positive', () => {
    const firstNumber = 11;
    const secondNumber = 11;
    const operationResult = (firstNumber >= secondNumber);
    expect(operationResult).toBe(true);
  });
  it('Operation more or equally Negative', () => {
    const firstNumber = 11;
    const secondNumber = 11;
    const operationResult = (firstNumber > secondNumber);
    expect(operationResult).toBe(true);
  });
  it('Operation less or equally Positive', () => {
    const firstNumber = 10;
    const secondNumber = 11;
    const operationResult = (firstNumber <= secondNumber);
    expect(operationResult).toBe(true);
  });
  it('Operation less or equally Negative', () => {
    const firstNumber = 11;
    const secondNumber = 10;
    const operationResult = (firstNumber <= secondNumber);
    expect(operationResult).toBe(true);
  });
  it('Operation equally Positive', () => {
    const firstNumber = 11;
    const secondNumber = 11;
    const operationResult = (firstNumber === secondNumber);
    expect(operationResult).toBe(true);
  });
  it('Operation equally Negative', () => {
    const firstNumber = 11;
    const secondNumber = 10;
    const operationResult = (firstNumber === secondNumber);
    expect(operationResult).toBe(true);
  });
  it('Operation not equally Positive', () => {
    const firstNumber = 11;
    const secondNumber = 10;
    const operationResult = (firstNumber !== secondNumber);
    expect(operationResult).toBe(true);
  });
  it('Operation not equally Negative', () => {
    const firstNumber = 11;
    const secondNumber = 11;
    const operationResult = (firstNumber !== secondNumber);
    expect(operationResult).toBe(true);
  });
  it('Logical AND Positive', () => {
    const firstNumber = 11;
    const secondNumber = 10;
    const operationResult = ((firstNumber !== secondNumber) && (firstNumber === 11));
    expect(operationResult).toBe(true);
  });
  it('Logical AND Negative', () => {
    const firstNumber = 11;
    const secondNumber = 10;
    const operationResult = ((firstNumber !== secondNumber) && (firstNumber === 10));
    expect(operationResult).toBe(true);
  });
  it('Logical OR Positive', () => {
    const firstNumber = 11;
    const secondNumber = 10;
    const operationResult = ((firstNumber !== secondNumber) || (firstNumber === 10));
    expect(operationResult).toBe(true);
  });
  it('Logical OR Negative', () => {
    const firstNumber = 11;
    const secondNumber = 10;
    const operationResult = ((firstNumber === secondNumber) || (firstNumber === 10));
    expect(operationResult).toBe(true);
  });
});

describe('Transformation operations', () => {
  it('Integer number Positive', () => {
    const price = '100 dollars';
    expect(parseInt(price)).toBe(100);
  });
  it('Integer number Negative', () => {
    const price = '100 dollars';
    expect(parseInt(price)).toBe('100');
  });
  it('Float number Positive', () => {
    const price = '100.5 dollars';
    expect(parseFloat(price)).toBe(100.5);
  });
  it('Float number Negative', () => {
    const price = '100.5 dollars';
    expect(parseFloat(price)).toBe('100,5');
  });
  it('isNaN function Positive', () => {
    const price = '100.5 dollars';
    expect(isNaN(price)).toBe(true);
  });
  it('isNaN function Negative', () => {
    const price = 'more than 100.5 dollars';
    expect(isNaN(price)).toBe(false);
  });
  it('isFinite function Positive', () => {
    const price = '100.5 dollars';
    expect(isFinite(price)).toBe(false);
  });
  it('isFinite function Negative', () => {
    const price = '100.5 dollars';
    expect(isFinite(price)).toBe(true);
  });
  it('String function Positive', () => {
    const price = 100.5;
    expect(String(price)).toBe('100.5');
  });
  it('String function Negative', () => {
    const price = 100.5;
    expect(String(price)).toBe(NaN);
  });
  it('Boolean method Positive', () => {
    const price = 100.5;
    expect(Boolean(price)).toBe(true);
  });
  it('Boolean method Negative', () => {
    const price = 0;
    expect(Boolean(price)).toBe(true);
  });
});

describe('Typeof methods', () => {
  it('Typeof string Positive', () => {
    const somethingUnknown = 'abc';
    expect(typeof(somethingUnknown)).toBe('string');
  });
  it('Typeof string Negative', () => {
    const somethingUnknown = 'abc';
    expect(typeof(somethingUnknown)).toBe('number');
  });
})

describe('Math objects methods', () => {
  it('PI number Positive', () => {
    const somethingUnknown = Math.PI;
    expect(somethingUnknown).toBe(3.141592653589793);
  });
  it('PI number Negative', () => {
    const somethingUnknown = Math.PI;
    expect(somethingUnknown).toBe(3.14);
  });
  it('Abs method Positive', () => {
    const somethingUnknown = (Math.PI) * (-1);
    expect(Math.abs(somethingUnknown)).toBe(3.141592653589793);
  });
  it('Abs method Negative', () => {
    const somethingUnknown = (Math.PI) * (-1);
    expect(Math.abs(somethingUnknown)).toBe(-3.141592653589793);
  });
  it('Max method Positive', () => {
    const somethingUnknownFirst = Math.PI;
    const somethingUnknownSecond = (Math.PI) * (-1);
    expect(Math.max(somethingUnknownFirst,somethingUnknownSecond)).toBe(somethingUnknownFirst);
  });
  it('Max method Negative', () => {
    const somethingUnknownFirst = Math.PI;
    const somethingUnknownSecond = (Math.PI) * (-1);
    expect(Math.max(somethingUnknownFirst,somethingUnknownSecond)).toBe(somethingUnknownSecond);
  });
  it('Min method Positive', () => {
    const somethingUnknownFirst = Math.PI;
    const somethingUnknownSecond = (Math.PI) * (-1);
    expect(Math.min(somethingUnknownFirst,somethingUnknownSecond)).toBe(somethingUnknownSecond);
  });
  it('Min method Negative', () => {
    const somethingUnknownFirst = Math.PI;
    const somethingUnknownSecond = (Math.PI) * (-1);
    expect(Math.min(somethingUnknownFirst,somethingUnknownSecond)).toBe(somethingUnknownFirst);
  });
  it('Round method Positive', () => {
    const somethingUnknown = Math.PI;
    expect(Math.round(somethingUnknown)).toBe(3);
  });
  it('Round method Negative', () => {
    const somethingUnknown = Math.PI;
    expect(Math.round(somethingUnknown)).toBe(4);
  });
  it('Ceil method Positive', () => {
    const somethingUnknown = Math.PI;
    expect(Math.ceil(somethingUnknown)).toBe(4);
  });
  it('Ceil method Negative', () => {
    const somethingUnknown = Math.PI;
    expect(Math.ceil(somethingUnknown)).toBe(3);
  });
  it('Floor method Positive', () => {
    const somethingUnknown = Math.PI;
    expect(Math.floor(somethingUnknown)).toBe(3);
  });
  it('Floor method Negative', () => {
    const somethingUnknown = Math.PI;
    expect(Math.floor(somethingUnknown)).toBe(4);
  });
  it('Sqrt method Positive', () => {
    const somethingUnknown = 100;
    expect(Math.sqrt(somethingUnknown)).toBe(10);
  });
  it('Sqrt method Negative', () => {
    const somethingUnknown = Math.PI;
    expect(Math.sqrt(somethingUnknown)).toBe(1);
  });
  it('Random method Positive', () => {
    const somethingUnknown = (0 < Math.random < 1);
    expect(somethingUnknown).toBe(true);
  });
  it('Random method Negative', () => {
    const somethingUnknown = (Math.random > 1);
    expect(somethingUnknown).toBe(true);
  });
  it('Sin method Positive', () => {
    const somethingUnknown = (Math.sin(Math.PI / 2) === 1);
    expect(somethingUnknown).toBe(true);
  });
  it('Sin method Negative', () => {
    const somethingUnknown = (Math.sin(Math.PI / 2) === 0);
    expect(somethingUnknown).toBe(true);
  });
  it('Cos method Positive', () => {
    const somethingUnknown = (Math.cos(Math.PI / 2) === 0);
    expect(somethingUnknown).toBe(false);
  });
  it('Cos method Negative', () => {
    const somethingUnknown = (Math.cos(Math.PI / 2) === 1);
    expect(somethingUnknown).toBe(true);
  });
  it('Tan method Positive', () => {
    const somethingUnknown = (Math.tan(Math.PI / 2) === 0);
    expect(somethingUnknown).toBe(false);
  });
  it('Tan method Negative', () => {
    const somethingUnknown = (Math.tan(Math.PI / 2) === 1);
    expect(somethingUnknown).toBe(true);
  });
})

describe('String methods', () => {
  it('Length Positive', () => {
    const somethingUnknown = 'Hello, World';
    expect(somethingUnknown.length).toBe(12);
  });
  it('Length Negative', () => {
    const somethingUnknown = 'Hello, World';
    expect(somethingUnknown.length).toBe(10);
  });
  it('CharAt Positive', () => {
    const somethingUnknown = 'Hello, World';
    expect(somethingUnknown.charAt(1)).toBe('e');
  });
  it('CharAt Negative', () => {
    const somethingUnknown = 'Hello, World';
    expect(somethingUnknown.charAt(1)).toBe('H');
  });
  it('Index Positive', () => {
    const somethingUnknown = 'Hello, World';
    expect(somethingUnknown[1]).toBe('e');
  });
  it('Index Negative', () => {
    const somethingUnknown = 'Hello, World';
    expect(somethingUnknown[1]).toBe('H');
  });
  it('Substr Positive', () => {
    const somethingUnknown = 'Hello, World';
    expect(somethingUnknown.substr(1,4)).toBe('ello');
  });
  it('Substr Negative', () => {
    const somethingUnknown = 'Hello, World';
    expect(somethingUnknown.substr(1,4)).toBe('Hell');
  });
  it('Slice Positive', () => {
    const somethingUnknown = 'Hello, World';
    expect(somethingUnknown.slice(1,4)).toBe('ell');
  });
  it('Slice Negative', () => {
    const somethingUnknown = 'Hello, World';
    expect(somethingUnknown.slice(1,4)).toBe('Hell');
  });
  it('Split Positive', () => {
    const somethingUnknown = 'Hello, World';
    expect(somethingUnknown.split(', ')).toEqual(['Hello','World']);
  });
  it('Split Negative', () => {
    const somethingUnknown = 'Hello, World';
    expect(somethingUnknown.split(', ')).toBe(['Hello','World']);
  });
  it('ToLowerCase Positive', () => {
    const somethingUnknown = 'Hello';
    expect(somethingUnknown.toLowerCase()).toEqual('hello');
  });
  it('ToLowerCase Negative', () => {
    const somethingUnknown = 'Hello';
    expect(somethingUnknown.toLowerCase()).toBe('HELLO');
  });
  it('ToUpperCase Positive', () => {
    const somethingUnknown = 'Hello';
    expect(somethingUnknown.toUpperCase()).toEqual('HELLO');
  });
  it('ToUpperCase Negative', () => {
    const somethingUnknown = 'Hello';
    expect(somethingUnknown.toUpperCase()).toBe('hello');
  });
  it('IndexOf Positive', () => {
    const somethingUnknown = 'Hello';
    expect(somethingUnknown.indexOf('l', 5)).toBe(-1);
  });
  it('IndexOf Negative', () => {
    const somethingUnknown = 'Hello';
    expect(somethingUnknown.indexOf('l', 5)).toBe('l');
  });
  it('lastIndexOf Positive', () => {
    const somethingUnknown = 'Hello';
    expect(somethingUnknown.lastIndexOf('l', 2)).toBe(2);
  });
  it('lastIndexOf Negative', () => {
    const somethingUnknown = 'Hello';
    expect(somethingUnknown.lastIndexOf('l', 5)).toBe('l');
  });
  it('Replace Positive', () => {
    const somethingUnknown = 'Hello';
    expect(somethingUnknown.replace('l', 'L')).toBe('HeLlo');
  });
  it('Replace Negative', () => {
    const somethingUnknown = 'Hello';
    expect(somethingUnknown.replace('l', 'L')).toBe('HeLLo');
  });
  it('Trim Positive', () => {
    const somethingUnknown = '\n\r\t\v Hello, World \n\r\t\v';
    expect(somethingUnknown.trim()).toBe('Hello, World');
  });
  it('Trim Negative', () => {
    const somethingUnknown = '\n\n\t Hello, World \n\n\t';
    expect(somethingUnknown.trim()).toBe('Hello,World');
  });
});

describe('Array methods', () => {
  it('Length array Positive', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.length).toBe(3);
  });
  it('Length array Negative', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.length).toBe(2);
  });
  it('Concat array Positive', () => {
    const countArray = ['first', 'second', 'third'];
    const animalArray = ['cat', 'dog', 'chicken'];
    expect(countArray.concat(animalArray)).toEqual(['first', 'second', 'third', 'cat', 'dog', 'chicken']);
  });
  it('Concat array Negative', () => {
    const countArray = ['first', 'second', 'third'];
    const animalArray = ['cat', 'dog', 'chicken'];
    expect(countArray.concat(animalArray)).toBe(['first', 'second', 'third', 'cat', 'dog', 'chicken']);
  });
  it('Join array Positive', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.join('/')).toEqual('first/second/third');
  });
  it('Join array Negative', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.join('/')).toEqual('first / second / third');
  });

  it('Push array Positive', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.push('fourth')).toBe(4);
  });
  it('Push array Negative', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.push('fourth')).toBe(['first', 'second', 'third', 'fourth']);
  });
  it('Pop array Positive', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.pop()).toBe('third');
  });
  it('Pop array Negative', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.pop()).toBe(['first', 'second', 'third', 'fourth']);
  })
  it('Pop array Positive', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.pop()).toBe('third');
  });
  it('Pop array Negative', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.pop()).toBe(['first', 'second', 'third', 'fourth']);
  })
  it('Unshift array Positive', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.unshift('zero')).toBe(4);
  });
  it('Unshift array Negative', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.unshift('fourth')).toBe(['first', 'second', 'third', 'fourth']);
  });
  it('Shift array Positive', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.shift()).toBe('first');
  });
  it('Shift array Negative', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.shift()).toBe(['first', 'second', 'third']);
  });
  it('Slice array Positive', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.slice(1, 2)).toEqual(['second']);
  });
  it('Slice array Negative', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.slice(2, 2)).toBe(['first', 'second', 'third']);
  });
  it('Splice array Positive', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.splice(1, 1)).toEqual(['second']);
  });
  it('Splice array Negative', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.splice(2, 2)).toBe(['first','second','third']);
  });
  it('Reverse array Positive', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.reverse()).toEqual(['third','second','first']);
  });
  it('Reverse array Negative', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.reverse()).toBe(['third','second','first']);
  });
  it('Reverse array Positive', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.reverse()).toEqual(['third','second','first']);
  });
  it('Reverse array Negative', () => {
    const countArray = ['first', 'second', 'third'];
    expect(countArray.reverse()).toBe(['third','second','first']);
  });
  it('Sort array Positive', () => {
    const countArray = ['first', 'third', 'second'];
    expect(countArray.sort()).toEqually(['first','second','third']);
  });
  it('Sort array Negative', () => {
    const countArray = ['first', 'third', 'second'];
    expect(countArray.sort()).toBe(['first','second','third']);
  });
});