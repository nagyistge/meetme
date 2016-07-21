import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { AppRouterProviders } from './app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

bootstrap(AppComponent, [
  AppRouterProviders,
  disableDeprecatedForms(),
  provideForms()
 ])
 .catch((err: any) => console.error(err));