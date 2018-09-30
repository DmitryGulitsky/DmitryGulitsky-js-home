var exportAnClean = require('./task2');

describe('Test anagram clean function', ()=> {
  it('Input Anna', ()=> {
    expect(exportAnClean(['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор']))
      .toBe(['ЗОВ', 'гробик', 'костер', 'сектор']);
  });
});