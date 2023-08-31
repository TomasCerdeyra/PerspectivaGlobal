import { Component } from '@angular/core';
import { Poll } from 'src/app/model/poll.interface';
import { poll } from 'src/app/services/Poll.service';

@Component({
  selector: 'app-poll-repones',
  templateUrl: './poll-repones.component.html',
  styleUrls: ['./poll-repones.component.css']
})
export class PollReponesComponent {
  constructor(private pollClass: poll){}
}
