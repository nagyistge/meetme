import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { AppRouterProviders } from './app.routes';

bootstrap(AppComponent, [
  AppRouterProviders
])
.catch(err => console.error(err));