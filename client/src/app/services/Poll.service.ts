import { Injectable } from "@angular/core";
import { Poll } from "../model/poll.interface";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class poll {
    private pollResponse = new BehaviorSubject<Poll>({photo: '', question: '', options: [], answer: ''})
    pollResponse$ = this.pollResponse.asObservable()

    
    constructor(private http: HttpClient){}

    getPolls(): Observable<object> {
        return  this.http.get('http://localhost:8080/lobby')
    }

    getPoll(question: string): any {
        let objId: string = ''
        let opcion: string = ''
        this.getPolls().subscribe((response: any) => {

            response.polls.forEach((element: any) => {
                if(element.question === question){
                    objId = element._id
                    opcion = element.options[element]
                }
            });  
        })
        return this.http.get(`http://localhost:8080/lobby/getItem/${objId}`)
    }

    getPollResponse(question: string){
        const poll = this.getPoll(question)
        if(poll === undefined){
            return console.log('no exist');
        }
        this.pollResponse.next(poll)
    }
}