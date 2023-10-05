import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  // {
  //   path: 'angular-app',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry:`${environment.angularRemoteEntry}/remoteEntry.mjs`,
  //       exposedModule: './Module',
  //     }).then((m) => m.RemoteEntryModule),
  // },
  // {
  //   path: 'react-app',
  //   component: WebComponentWrapper,
  //   data: {
  //     type: 'module',
  //     remoteEntry:
  //     `${environment.reactRemoteEntry}/remoteEntry.js`,
  //     remoteName: 'about',
  //     exposedModule: './Module',
  //     elementName: 'react-app',
  //   } as WebComponentWrapperOptions,
  // },
  // {
  //   path: 'mqtt',
  //   component: WebComponentWrapper,
  //   data: {
  //     type: 'module',
  //     remoteEntry: `${environment.mqttRemoteEntry}/remoteEntry.js`,
  //     remoteName: 'mqtt',
  //     exposedModule: './Module',
  //     elementName: 'mqtt',
  //   } as WebComponentWrapperOptions,
  // },
  {
    path: '',
    component: NxWelcomeComponent,
  },
  { path: '**', redirectTo: '' },
];
