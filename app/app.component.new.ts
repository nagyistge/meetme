import { Component } from '@angular/core';
import { MeetingService } from './meeting.service';

@Component({
    selector: 'meetme-new',
    template: '<h2>New meeting</h2>',
    providers: [
      MeetingService,
    ]
})
export class AppComponentNew{

 }
