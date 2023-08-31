export interface Poll {
    _id: string
    photo: string;
    question: string;
    options: string[];
    answer: string,
    category: string
}

export interface ResponseInterface {
    poll: Poll;
    _status: number;
} 