# Escalade Dealer Locator

## With React

### Installation

With Yarn:

```bash
yarn add escalade-dealer-locator
```

With npm:

```bash
npm install --save escalade-dealer-locator
```

### Usage

```jsx
import DealerLocator from 'escalade-dealer-locator'

...

<DealerLocator />
```

## With Anything Else

```html
<div data-esca-dealers-loading>Loading...</div>
<div data-esca-dealers></div>

<!-- Before your closing </body> tag -->
<script src='https://escalade-dealer-locator.netlify.com/index.js' async></script>
<script>
	new EscaDealerLocator({
		brand: 'goalrilla'
	})
</script>
```