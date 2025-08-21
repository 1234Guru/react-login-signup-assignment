import { validateName, validateUsername, validatePassword, validateConfirm, validateEmail, validatePhone } from '../validation/rules';

test('validateName only alphabets', () => {
  expect(validateName('John Doe')).toBe('');
  expect(validateName('John-Ann')).toBe('');
  expect(validateName('John123')).not.toBe('');
});

test('validateUsername policy', () => {
  expect(validateUsername('user1!')).toBe('');
  expect(validateUsername('user')).not.toBe('');
  expect(validateUsername('user12')).not.toBe('');
  expect(validateUsername('user 1!')).not.toBe('');
});

test('validatePassword policy & diff from username', () => {
  expect(validatePassword('Pass123!', 'user1!')).toBe('');
  expect(validatePassword('user1!', 'user1!')).toContain('differ');
});

test('confirm matches', () => {
  expect(validateConfirm('abc', 'abc')).toBe('');
  expect(validateConfirm('ab', 'abc')).not.toBe('');
});

test('gmail only', () => {
  expect(validateEmail('abc@gmail.com')).toBe('');
  expect(validateEmail('abc@yahoo.com')).not.toBe('');
});

test('phone format', () => {
  expect(validatePhone('+91 9876543210')).toBe('');
  expect(validatePhone('+1-1234567890'.replace('-', ' '))).toBe('');
  expect(validatePhone('9876543210')).not.toBe('');
});
