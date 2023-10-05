import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { appRoutes } from './app.routes';
export interface AppModel {
  path: string;
  srcPath: string;
  appName: string;
  appType?: string;
  appRootElement?: string;
}

@Component({
  selector: 'src-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shell';
  httpClient = inject(HttpClient);
  router = inject(Router);
  apps: AppModel[] = [];

  ngOnInit() {
    this.httpClient.get<AppModel[]>('/assets/route.json').subscribe((apps) => {
      this.apps = [...apps];
      this.getApp(apps);
    });
  }

  getApp(apps: AppModel[]) {
    const newRoutes = apps.map((app) => {
      return {
        path: app.path,
        component: WebComponentWrapper,
        data: {
          type: 'module',
          remoteEntry: app.srcPath,
          remoteName: app.appName,
          exposedModule: './Module',
          elementName: app.appRootElement,
        } as WebComponentWrapperOptions,
      };
    });

    this.router.resetConfig([...newRoutes, ...appRoutes]);
  }
}
