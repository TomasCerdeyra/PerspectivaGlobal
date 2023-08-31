import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContadorService {
  votes: any = {}
  //Opciones
  private resoult = new BehaviorSubject<{}>({})
  resoult$ = this.resoult.asObservable()

  constructor() { }

  sendVotes(data: any) {
    this.votes = data
    this.calculatios()
  }

  calculatios() {
    let cantVotes: number = this.votes.totalResponses
    let option0: number = 0
    let option1: number = 0
    let option2: number = 0
    let option3: number = 0

    this.votes.clicks.forEach((voto: number) => {
      if (voto === 0) option0++
      if (voto === 1) option1++
      if (voto === 2) option2++
      if (voto === 3) option3++
    });


    this.resoult.next({
      canVotes: cantVotes,
      percentaje0ption0: (option0 * 100) / cantVotes,
      percentaje0ption1: (option1 * 100) / cantVotes,
      percentaje0ption2: (option2 * 100) / cantVotes,
      percentaje0ption3: (option3 * 100) / cantVotes
    })
  }


}
