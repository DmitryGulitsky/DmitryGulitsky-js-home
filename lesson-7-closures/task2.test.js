var exportInterviewQuestion = require('./task2');

describe('Test interview question function', ()=> {
  it('Input name=John, profession=teacher ', ()=> {
    expect(exportInterviewQuestion('teacher')('John')).toBe('What subject do you teach John?');
  });
  it('Input name=John, profession=designer ', ()=> {
    expect(exportInterviewQuestion('designer')('John')).toBe('John can you please explain what UX design is?');
  });
  it('Input name=John, profession=other ', ()=> {
    expect(exportInterviewQuestion('other')('John')).toBe('Hello John, what do you do?');
  });
});

