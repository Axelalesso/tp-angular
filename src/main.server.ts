import { bootstrapApplication } from '@angular/platform-browser';
import {  AppComponent } from './app/app';
import { config } from './app/app.config.server';
import 'zone.js'; // 👈 esto habilita Zone.js (necesario para NG0908)


const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
