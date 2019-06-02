# unity-richtext-converter

[![Build Status](https://travis-ci.org/AWaterColorPen/unity-rich-text-converter.svg?branch=master)](https://travis-ci.org/AWaterColorPen/unity-rich-text-converter)

> typescript library to converter message between unity rich text and html standard rich text.

## Usage

- install it

```shell
npm install unity-richtext-converter
```

- usage

```typescript
import Converter from "unity-richtext-converter";

const converter = new Converter();

const unitytext = converter.html2unity(text);
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

- test

```shell
npm run test
```

## Unity Rich Text

(adapted from the [official documentation](https://docs.unity3d.com/Manual/StyledText.html))

## License

MIT © [awatercolorpen](https://github.com/awatercolorpen)
