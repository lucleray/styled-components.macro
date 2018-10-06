## styled-components.macro 🎣

A `babel-plugin-macros` macro for `styled-components`.

### Usage

```js
import styled from 'styled-components.macro'

const Button = styled.button`
  background: purple;
  color: white;
`

// ...
```

### Setup for create-react-app

Create-react-app is shipped already including `babel-plugin-macros`, which makes it much easier to setup 🚀

1. Make sure you have already installed `styled-components` :

```
yarn add styled-components
```

2. Install this package :

```
yarn add styled-components.macro --dev
```

### General setup

1. Make sure you have already installed `styled-components` :

```
yarn add styled-components
```

2. Install `babel-plugin-macros` and add it to your babel config :

```js
// .babelrc
{
  "plugins": ["macros"]
}
```

See [babel-plugin-macros docs](https://github.com/kentcdodds/babel-plugin-macros/blob/master/other/docs/user.md#babel-plugin-macros-usage-for-users) for more information about how to setup `babel-plugin-macros`.

3. Install this package :

```
yarn add styled-components.macro --dev
```

### More

This macro is using `babel-plugin-styled-components` to transform your code. See [babel-plugin-styled-components](https://github.com/styled-components/babel-plugin-styled-components) to see what transformations are applied.
