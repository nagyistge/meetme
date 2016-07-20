import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeetingService } from './meeting.service';

@Component({
    selector: 'meetme-vote',
    template: '<h2>Vote meeting</h2>',
    providers: [
      MeetingService,
    ]
})
export class AppComponentVote implements OnInit, OnDestroy{

  private paramsSubscription: any;

  constructor(
    private meetingService: MeetingService,
    private route: ActivatedRoute) {
  }

  
  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      let id = +params['id'];
    });
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
