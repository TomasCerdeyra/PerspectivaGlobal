import { Poll } from "../model/poll.interface";
import { BehaviorSubject } from "rxjs";

const arrayPrueba: Poll[] = [
    {
        photo: 'hola.com',
        question: 'Primera Encuesta piquete',
        options: ['true', 'true-true', 'false', 'false'],
        correctAnswer: 'true-true',
    },
    {
        photo: 'hola.com.ar',
        question: 'Segunda Encuesta piquete',
        options: ['true', 'true-true', 'false', 'false'],
        correctAnswer: 'true-true',
    },
    {
        photo: 'hola.com',
        question: 'Tercera Encuesta piquete',
        options: ['true', 'true-true', 'false', 'false'],
        correctAnswer: 'true-true',
    },
]

export class poll {
    private pollResponse = new BehaviorSubject<Poll>({photo: '', question: '', options: [], correctAnswer: ''})
    pollResponse$ = this.pollResponse.asObservable()

    getPolls(): Poll[] {
        //TODO: Hacer observable cuando tenga back
        return arrayPrueba 
    }

    getPoll(question: string): Poll | undefined {
        return arrayPrueba.find(poll => poll.question === question)
    }

    getPollResponse(question: string){
        const poll = this.getPoll(question)
        if(poll === undefined){
            return console.log('no exist');
        }
        this.pollResponse.next(poll)
    }
}