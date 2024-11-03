import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideAuth0({
      domain: 'dev-7fvb7yro48pcduqm.us.auth0.com',
      clientId: 'KZHWPMBGOnddUixc0aIwn2GNFqQZYQcc',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    ] 
};
