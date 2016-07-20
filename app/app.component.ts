import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MeetingService }        from './meeting.service';

import{AppComponentNew} from './app.component.new';
import{AppComponentVote} from './app.component.vote';
    
@Component({
  selector: 'meetme-app',
  template: `
    <h1>Component Router</h1>
    <nav>
      <a [routerLink]="['/new']">New</a><hr/>
      <a [routerLink]="['/vote/0']">Vote</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
      MeetingService,
    ]
})

export class AppComponent { }
