var exportAnClean = require('./task3');

describe('Test anagram clean function', ()=> {
  it('Input Anna', ()=> {
    expect(exportAnClean(['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор']))
      .toEqual(['ЗОВ', 'гробик', 'сектор']);
  });
});
