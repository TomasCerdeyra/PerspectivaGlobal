import { Component,Input } from '@angular/core';
import { Poll } from 'src/app/model/poll.interface';

@Component({
  selector: 'app-poll-only-response',
  templateUrl: './poll-only-response.component.html',
  styleUrls: ['./poll-only-response.component.css']
})
export class PollOnlyResponseComponent {
  @Input() poll!: Poll
}
