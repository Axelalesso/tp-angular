import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app'
import 'zone.js'; // ¡necesario si usás zone.js!
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
