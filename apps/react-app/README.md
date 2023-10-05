# Setup angular MFE

## I Setup React MFE
**1. Init React app using @nx/react**
```
npx nx g @nx/react:remote react-app
```

**2. Update app.tsx to wrap React app into Web Component**

Note: **"react-app"** will be used in shell routes config
```
import NxWelcome from './nx-welcome';
import * as ReactDOM from 'react-dom/client';
import { Root } from 'react-dom/client';
import { useEffect } from 'react';


export function App() {
  useEffect(() => {
    const cb = (evt: Event) => console.log(evt);
    document.addEventListener('customEvent', cb);
    return () => document.removeEventListener('customEvent', cb);
  }, []);

  return (
      <NxWelcome title="react-app" />
  );
}

class ContactRootAppElement extends HTMLElement {
  root!: Root;
  connectedCallback() {
    this.root = ReactDOM.createRoot(this);
    this.root.render(<App />)
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
    }
  }
}

customElements.define('react-app', ContactRootAppElement);

```

**3. Update remote-entry.ts**
```
export *  from './app/app';
```

**4. Update module-federation.config.js**
```
module.exports = {
  name: 'react-app',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
```

## II Update shell routes config
**1. Install @angular-architects/module-federation-tools**
```
npm i @angular-architects/module-federation-tools
```

**2. Update app.routes.ts**

Notes:
- **elementName**: from react app.tsx
- **type**: must be declared as 'module'
```
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  ...,
  {
    path: 'react-app',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'react-app',
      exposedModule: './Module',
      elementName: 'react-element',
    } as WebComponentWrapperOptions,
  }
];

```
**3. Update remotes.d.ts**
```
declare module 'react-app/Module';
```
**4. Update module-federation.config.js**
```
module.exports = {
  name: 'shell',
  remotes: ['angular-app', 'react-app'],
};
```

**Note Must Change port differect with shell port, ex:  4202**
