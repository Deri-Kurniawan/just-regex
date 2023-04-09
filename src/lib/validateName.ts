import { IValidateName } from '@/types/validateName';

/**
 * Validates a string to ensure it only contains allowed characters.
 * @function
 * @param {string} name - The string to validate.
 * @param {Object} [options] - The options to use for validation.
 * @param {boolean} [options.allowNumbers=false] - Whether to allow numbers.
 * @param {boolean} [options.allowSpecialCharacters=false] - Whether to allow special characters.
 * @param {boolean} [options.allowSpaces=false] - Whether to allow spaces.
 * @param {boolean} [options.allowUnderscores=false] - Whether to allow underscores.
 * @param {boolean} [options.allowDashes=false] - Whether to allow dashes.
 * @param {boolean} [options.allowPunctuation=false] - Whether to allow punctuation.
 * @param {boolean} [options.allowCyrillic=false] - Whether to allow Cyrillic characters.
 * @param {boolean} [options.allowNonLatin=false] - Whether to allow non-Latin characters.
 * @returns {boolean} Whether the string is valid or not.
 **/
const validateName: IValidateName = (
  name,
  options = {
    allowNumbers: false,
    allowSpecialCharacters: false,
    allowSpaces: false,
    allowUnderscores: false,
    allowDashes: false,
    allowPunctuation: false,
    allowCyrillic: false,
    allowNonLatin: false,
  },
) => {
  let regexStr = `^[a-zA-Z`;

  if (options.allowNonLatin) {
    regexStr += `\\p{L}`;
  }

  if (options.allowNumbers) {
    regexStr += `0-9`;
  }

  if (options.allowSpecialCharacters) {
    regexStr += String.raw`~!@#$%^&*()\-_=+[\]{}|\\;:',./<>?`;
  }

  if (options.allowSpaces) {
    regexStr += `\\s`;
  }

  if (options.allowUnderscores) {
    regexStr += `\\_`;
  }

  if (options.allowDashes) {
    regexStr += `\\-`;
  }

  if (options.allowPunctuation) {
    regexStr += `\\p{P}`;
  }

  if (options.allowCyrillic) {
    regexStr += `\\p{Cyrillic}`;
  }

  regexStr += `]+$`;

  return new RegExp(regexStr, 'u').test(name);
};

export default validateName;
