export interface IConverter {
  /**
   * convert a standard html string to a an unity rich text string
   * @param input {string} standard html string
   * @returns {string} unity rich text result
   * @throws {Error} error exception
   */
  html2unity(input: string): string;

  /**
   * convert an unity rich text string to a standard html string
   * @param input {string} unity rich text string
   * @returns {string} standard html result
   * @throws {Error} error exception
   */
  unity2html(input: string): string;
}
