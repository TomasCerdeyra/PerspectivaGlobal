import { Injectable } from "@angular/core";
import { Poll, ResponseInterface } from "../model/poll.interface";
import { BehaviorSubject, Observable } from "rxjs";
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class poll {
    /* private pollResponse = new BehaviorSubject<Poll>({_id: '', photo: '', question: '', options: [], answer: '', category: ''})
    pollResponse$ = this.pollResponse.asObservable( */

    
    constructor(private http: HttpClient){}

    getPolls(): Observable<object> {
        return  this.http.get('http://localhost:8080/lobby')
    }

    getPollId(id: string): Observable<object>{
        return this.http.get(`http://localhost:8080/lobby/getItem/${id}`)
    }

    sendResponsePoll(id: string, option: string){
        return this.http.get(`http://localhost:8080/lobby/getItem/${id}/calculateTotal/${option}`)
    }

}