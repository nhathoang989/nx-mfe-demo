# Src

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **Micro Frontend Architecture [link](https://nx.dev/more-concepts/micro-frontend-architecture)** ✨

**Generating applications**
```
# React
npx nx g @nx/react:host shell --remotes=shop,cart
npx nx g @nx/react:remote about --host=shell

# Angular
npx nx g @nx/angular:host shell --remotes=shop,cart
npx nx g @nx/angular:remote about --host=shell
```

**Run applications**
```
npm i
npx nx serve shell --devRemotes=cart,shop
```
**View interactive project graph**
```
npx nx graph
```
**Run affected commands**
```
# see what's been affected by changes
npx nx affected:graph

# run tests for current changes
npx nx affected:test

# run e2e tests for current changes
npx nx affected:e2e
```
**Add UI Library**
```
npx nx g @nx/angular:lib ui
```
