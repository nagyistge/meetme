import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Answer, Person, Meeting, Participation } from '../model/meeting.dtos';

@Injectable()
export class MeetingService {
}
