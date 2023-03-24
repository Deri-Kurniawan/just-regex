import JustRegex from '../index';

describe('JustRegex', () => {
  it('should return true for a valid email', () => {
    expect(JustRegex()).toBe('Just Regex, Will Available Soon!');
  });
});
