# \<much-selector>

![Doge Meme](public/doge.jpg)

A web component - powered by Elm - that will create a powerful select menu.

## Prior Art/Inspiration/Goals

The project draws heavy inspiration from the jquery based [selectize.js](https://selectize.github.io/selectize.js/).

The need for this project is that we want to use selectize.js however we need the over all app to be built in [Elm](https://elm-lang.org/). Elm needs to "own" the DOM and selectize is built in a way that's not compatible with that. 

The goal for this project to achieve near feature parity with selectize using web components. The API will be different so it will not be a drop in replacement but hopefully it will not be too hard to replace one with the other.

## Installation

```bash
npm i much-selector-elm
```

## Usage

The npm package gives you the class `MuchSelector` (which inherits from `HTMLElement`), what you need to do is use it to define your own element.

```javascript
import MuchSelector from "@getdrip/much-selector-elm";

if (!customElements.get("much-selector")) {
  // Putting guard rails around this because browsers do not like
  //  having the same custom element defined more than once.
  window.customElements.define("much-selector", MuchSelector);
}
```

## Development

To work on this project, clone the repo to your machine, then.

``` bash
npm install
```

To run a webpack development server with the sandbox/demo page:

```bash
npm run watch
```

To do a production build run

```bash
npm run build
```

## API

### DOM

#### Attributes

#### Options

### Events

### Functions
