import { Component, OnInit, OnDestroy } from '@angular/core';
import { MeetingService } from '../services/meeting.backend';
import { Meeting } from '../model/meeting.dtos';

@Component({
    selector: 'meetme-new',
    templateUrl: './app/templates/new.meeting.view.html',
    providers: [
      MeetingService,
    ]
})
export class AppComponentNew implements OnInit{
  public meetingData: Meeting;

  public saveMeetingData(){
  }  

  ngOnInit() {
    this.meetingData = new Meeting();     
  }
}
