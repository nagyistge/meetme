import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeetingService } from '../services/meeting.backend';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'meetme-vote',
    template: `<h2>Vote meeting</h2>
              <nav>
                <a [routerLink]="['/new']">New</a><hr/>
              </nav>`,
    directives : [ROUTER_DIRECTIVES],
    providers: [MeetingService]
})
export class AppComponentVote implements OnInit, OnDestroy{

  private paramsSubscription: any;

  constructor(
    private meetingService: MeetingService,
    private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      let hash = params['hash'];+
      console.log(hash);
      
    });
  }
  
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
