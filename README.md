# unity-richtext-converter

[![Node.js Package](https://github.com/AWaterColorPen/unity-rich-text-converter/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/AWaterColorPen/unity-rich-text-converter/actions/workflows/npm-publish.yml)

> a typescript library to converter message between unity rich text and html standard rich text.

## Usage

- install it

```shell
npm install unity-richtext-converter
```

- usage

```typescript
import Converter from "unity-richtext-converter";

const converter = new Converter();

// convert HTML to unity rich text
const unitytext = converter.html2unity(text);
// convert unity rich text to HTML
const htmltext = converter.unity2html(text);
```

## Development

- install env, please make sure [node.js](https://nodejs.org) installed

```shell
npm install
```

- build

```shell
npm run build
```

- run test

```shell
npm run test
```

## Unity Rich Text

(adapted from the [official documentation](https://docs.unity3d.com/Manual/StyledText.html))

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

MIT © [awatercolorpen](https://github.com/awatercolorpen)
