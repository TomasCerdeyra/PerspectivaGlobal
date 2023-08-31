import { Component, OnInit } from '@angular/core';
import { Poll } from 'src/app/model/poll.interface';
import { poll } from 'src/app/services/Poll.service';


@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit{
  pollList: Poll[] = []
  constructor(private pollClass: poll){}

  ngOnInit(): void {
    this.pollClass.getPolls().subscribe(
      {
        next: (data: any) => {
          this.pollList = data.polls 
        },
        error: (error) => console.log(error),
        complete: () => console.log('peticion complete')
      })
  }
}
