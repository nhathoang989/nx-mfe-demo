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
      <NxWelcome title="React Application" />
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
