import { provideRouter, RouterConfig } from '@angular/router';
import {  } from '@angular/router';
import { AppComponentNew } from './app.component.new';
import { AppComponentVote } from './app.component.vote';

const routes: RouterConfig = [
  { path: 'new', component: AppComponentNew },
  { path: 'vote/:id', component: AppComponentVote },
  { path: '**', component: AppComponentNew }
];

export const AppRouterProviders = [
  provideRouter(routes)
];
