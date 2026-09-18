import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // La app corre sin zone.js: el motor eager (provideAnimations) deja las
    // transiciones a medias porque nadie dispara el flush que las completa
    provideAnimationsAsync()
  ]
};
