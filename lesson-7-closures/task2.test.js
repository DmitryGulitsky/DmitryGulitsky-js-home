var exportInterviewQuestion = require('./task2');

describe('Test interview question function', ()=> {
  it('Teacher answer for John', ()=> {
    expect(exportInterviewQuestion('teacher')('John')).toBe('What subject do you teach John?');
  });
  it('Designer answer for John', ()=> {
    expect(exportInterviewQuestion('designer')('John')).toBe('John can you please explain what UX design is?');
  });
  it('Other answer for John', ()=> {
    expect(exportInterviewQuestion('other')('John')).toBe('Hello John, what do you do?');
  });
});
