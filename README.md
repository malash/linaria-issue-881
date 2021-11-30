# Linaria rebuild twice issue demo

1. Run `yarn`
2. Run `yarn start`
3. Add a new line into `src/App.js`

from

```tsx
const Title = styled.h1`
  font-family: sans-serif;
  font-size: 48px;
  color: #f15f79;
`;
```

to

```tsx
const Title = styled.h1`
  font-family: sans-serif;
  font-size: 48px;
  color: #f15f79;
  font-weight: bold;
`;
```

4. Watch Webpack's log, the `Compiled successfully` output twice, which means Webpack rebuild twice.

![image](https://user-images.githubusercontent.com/1812118/143988079-50c7ee72-a7e2-409f-a22b-0290dbd03e3f.png)
