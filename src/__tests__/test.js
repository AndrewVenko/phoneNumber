import cleanPhoneNumber from '../cleanPhoneNumber';

describe('cleanPhoneNumber', () => {
  it('номер начинается с 8', () => {
    const number = '8 (927) 000-00-00';
    expect(cleanPhoneNumber(number)).toBe('+79270000000');
  });

  it('номер начинается с +7', () => {
    const number = '+7 960 000 00 00';
    expect(cleanPhoneNumber(number)).toBe('+79600000000');
  });

  it('международный номер', () => {
    const number = '+86 000 000 0000';
    expect(cleanPhoneNumber(number)).toBe('+860000000000');
  });
});
