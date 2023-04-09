/**
 * Represents the name parameter passed to the `IValidateName` function.
 * @type {string}
 */
export type TValidateNameParamName = string;

/**
 * Validates a string to ensure it only contains allowed characters.
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
 */
export type TValidateNameParamOptions = {
  allowNumbers?: boolean,
  allowSpecialCharacters?: boolean,
  allowSpaces?: boolean,
  allowUnderscores?: boolean,
  allowDashes?: boolean,
  allowPunctuation?: boolean,
  allowCyrillic?: boolean,
  allowNonLatin?: boolean,
};

/**
 * Validates a string to ensure it only contains allowed characters.
 * @param {TValidateNameParamName} name - The string to validate.
 * @param {TValidateNameParamOptions} [options] - The options to use for validation.
 * @param {boolean} [options.allowNumbers=false] - Whether to allow numbers.
 * @param {boolean} [options.allowSpecialCharacters=false] - Whether to allow special characters.
 * @param {boolean} [options.allowSpaces=false] - Whether to allow spaces.
 * @param {boolean} [options.allowUnderscores=false] - Whether to allow underscores.
 * @param {boolean} [options.allowDashes=false] - Whether to allow dashes.
 * @param {boolean} [options.allowPunctuation=false] - Whether to allow punctuation.
 * @param {boolean} [options.allowCyrillic=false] - Whether to allow Cyrillic characters.
 * @param {boolean} [options.allowNonLatin=false] - Whether to allow non-Latin characters.
 * @returns {boolean} Whether the string is valid or not.
 */
export interface IValidateName {
  (name: TValidateNameParamName, options?: TValidateNameParamOptions): boolean;
}

export default IValidateName;
