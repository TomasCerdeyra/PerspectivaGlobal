import { Poll } from "../model/poll.interface";
import {HttpClient} from '@angular/common/http'
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class poll {
    private pollResponse = new BehaviorSubject<Poll>({photo: '', question: '', options: [], correctAnswer: ''})
    pollResponse$ = this.pollResponse.asObservable()

    
    constructor(private http: HttpClient){}

    getPolls(): Observable<Object> {
        //TODO: Hacer observable cuando tenga back
        return  this.http.get('http://localhost:8080/lobby')
    }

    getPoll(question: string): any {
        this.getPolls().subscribe((poll) => {
            let OptionId = poll
            console.log(OptionId);
        })
        return this.http.get('/getItem/:id/calculateTotal/:option')
    }

    getPollResponse(question: string){
        const poll = this.getPoll(question)
        if(poll === undefined){
            return console.log('no exist');
        }
        this.pollResponse.next(poll)
    }
}