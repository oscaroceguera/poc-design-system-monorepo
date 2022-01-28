1. Storybook root:

- config to run for packages monorepos

2. create within packages:

- core - all dependencies that we can shared
- components
- icons
- illustrations

3. test run story book

4. eslint, prettier, test, husky (devDependencies)

5. create some components, icons and illustrations with material-ui

Create a scoped workspace

```shell
npm init --scope=@oceb -y -w ./packages/is-even
npm init --scope=@oceb -y -w ./packages/is-odd
```

Adde dependecies between workspaces

```shell
npm install @oceb/core --workspace @oceb/icons
```

```js
"npm run storybook -w @oceb/icons",
```
