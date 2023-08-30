import { Component, Input } from '@angular/core';
import { Poll } from 'src/app/model/poll.interface';
import { poll } from 'src/app/services/Poll.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent {
  @Input() poll!: Poll;

  constructor(private pollClass: poll){}

  }
}
