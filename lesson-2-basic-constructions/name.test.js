describe('Typeof methods', () => {
  it('Typeof string Positive', () => {
    const somethingUnknown = 'abc';
    expect(typeof(somethingUnknown)).toBe('string');
  });
  it('Typeof string Negative', () => {
    const somethingUnknown = 'abc';
    expect(typeof(somethingUnknown)).toBe('number');
  });
  it('Typeof number Positive', () => {
    const somethingUnknown = 10;
    expect(typeof(somethingUnknown)).toBe('number');
  });
  it('Typeof number Negative', () => {
    const somethingUnknown = 10;
    expect(typeof(somethingUnknown)).toBe('boolean');
  });
  it('Typeof boolean Positive', () => {
    const somethingUnknown = true;
    expect(typeof(somethingUnknown)).toBe('boolean');
  });
  it('Typeof boolean Negative', () => {
    const somethingUnknown = 'abc';
    expect(typeof(somethingUnknown)).toBe('number');
  });
  it('Typeof undefined Positive', () => {
    const somethingUnknown = undefined;
    expect(typeof(somethingUnknown)).toBe('undefined');
  });
  it('Typeof undefined Negative', () => {
    const somethingUnknown = 'abc';
    expect(typeof(somethingUnknown)).toBe('number');
  });
  it('Typeof object Positive', () => {
    const somethingUnknown = {};
    expect(typeof(somethingUnknown)).toBe('object');
  });
  it('Typeof object Negative', () => {
    const somethingUnknown = 'abc';
    expect(typeof(somethingUnknown)).toBe('object');
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
  it('Pre minus one Positive', () => {
    const firstWord = 'Milky';
    const secondWord = 'way';
    expect(firstWord + secondWord).toBe('Milkyway');
  });
  it('Pre minus one Positive', () => {
    const firstWord = 'Milky';
    const secondWord = 'way';
    expect(firstWord + secondWord).toBe('Nuts');
  });
  it('Pre minus one Positive', () => {
    let firstWord = 'Milky';
    const secondWord = 'way';
    firstWord += secondWord;
    expect(firstWord).toBe('Milkyway');
  });
  it('Pre minus one Positive', () => {
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
  it('Operation equally Positive', () => {
    const firstNumber = 11;
    const secondNumber = 10;
    const operationResult = (firstNumber !== secondNumber);
    expect(operationResult).toBe(true);
  });
  it('Operation equally Negative', () => {
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




describe('String methods', () => {
  it('StringUpperCasePositive', () => {
    const somethingUnknown = 'abc';
    expect(somethingUnknown.toLocaleUpperCase()).toBe('ABC');
  });
  it('StringUpperCaseNegative', () => {
    const somethingUnknown = 'abc';
    expect(somethingUnknown.toLocaleUpperCase()).toBe('abc');
  });
})