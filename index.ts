/**
 * Check if input is a string
 * @param input
 */
const isString = (input: any) => typeof (input) === "string" || input instanceof String;

export function add(a: number, b: number): number {
    return a + b;
}

class Converter {
    constructor() {
        this.colors = colors
    }

    /**
     * Parse a rich text string and compile it to html
     * @param input {string} unity rich text string
     * @returns {string} html result
     * @throws {Error} Parsing error exception
     */
    public parse(input: string): string {
        if (!isString(input)) {
            throw new Error("parsing error, input must be a string")
        }
        while (input.match(parsers.color.pattern)) {
            input = input.replace()
        }
        return input
    }
}

module.exports = new Converter();