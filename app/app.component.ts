import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MeetingService }        from './services/meeting.backend';

import{AppComponentNew} from './components/new.meeting';
import{AppComponentVote} from './components/vote.meeting';
    
@Component({
  selector: 'meetme-app',
  template: `
    <h1>MeetMe</h1>
    <P>Gruppen Vereinbarung</P>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
      MeetingService,
    ]
})

export class AppComponent { }
