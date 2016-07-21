import { provideRouter, RouterConfig } from '@angular/router';
import {  } from '@angular/router';
import { AppComponentNew } from './components/new.meeting';
import { AppComponentVote } from './components/vote.meeting';

const routes: RouterConfig = [
  { path: 'new', component: AppComponentNew },
  { path: 'vote/:hash', component: AppComponentVote },
  { path: '**', component: AppComponentNew }
];

export const AppRouterProviders = [
  provideRouter(routes)
];
