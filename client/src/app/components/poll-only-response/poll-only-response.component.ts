import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
import { Poll, ResponseInterface } from 'src/app/model/poll.interface';
import { poll } from 'src/app/services/Poll.service';
import { ContadorService } from 'src/app/services/contador.service';

@Component({
  selector: 'app-poll-only-response',
  templateUrl: './poll-only-response.component.html',
  styleUrls: ['./poll-only-response.component.css']
})
export class PollOnlyResponseComponent implements OnInit {
  poll: any
  id: string = ''
  resoult: any = {}
  click: boolean = false

  constructor(private pollClass: poll, private rote: ActivatedRoute, private contador: ContadorService) { }

  ngOnInit(): void {
    this.rote.params.subscribe((data: any) => this.id = data.id)
    this.pollClass.getPollId(this.id).subscribe(
      {
        next: (response: any) => {
          this.poll = response
          this.contador.sendVotes(this.poll.poll)
          this.contador.resoult$.subscribe(res => this.resoult = res)
        },
        error: (eror) => console.log(eror),
        complete: () => console.log('Peticion complete')
      }
    )
  }

  calcularResult(options: string) {
    this.pollClass.sendResponsePoll(this.id, options).subscribe(
      {
        next: (response: any) => {
        },
        error: (error) => console.log(error),
        complete: () => console.log('complete')
      }
    )
  }

}
