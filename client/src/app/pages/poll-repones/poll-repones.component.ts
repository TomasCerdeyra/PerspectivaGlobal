import { Component,OnInit } from '@angular/core';
import { Poll } from 'src/app/model/poll.interface';
import { poll } from 'src/app/services/Poll.service';

@Component({
  selector: 'app-poll-repones',
  templateUrl: './poll-repones.component.html',
  styleUrls: ['./poll-repones.component.css']
})
export class PollReponesComponent implements OnInit{
  pollOnly: Poll = {photo:'', question: '', options: [], answer: ''};

  constructor(private pollClass: poll){}

  ngOnInit(): void {
    this.pollClass.pollResponse$.subscribe((poll) => {
      console.log(poll);
      this.pollOnly = poll
    })
  }
}
