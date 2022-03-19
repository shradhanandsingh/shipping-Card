import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { QuestionService } from "../../services/question.service";

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit {
    condidateName: string = '';
    questionList = [];
    currentQuestionNumber: number = 0;
    points: number = 0;
    counter: number = 60;
    correctAnswer: number = 0;
    incorrectAnswer: number = 0;
    interval$: any;
    progress: string = '';
    quizCompleted:boolean=false;

    constructor(private questionService: QuestionService) { }
    ngOnInit(): void {
        this.condidateName = localStorage.getItem("name");

        this.getAllQuestion();
        this.startCounter();

    }


    getAllQuestion() {
        this.questionService.getAllQuestion().subscribe((data: any) => {
            this.questionList = data;
            console.log('ddd', data)
        })
    }

    nextQuestion() {
        this.currentQuestionNumber++;
    }
    prevQuestion() {
        this.currentQuestionNumber--;
    }

    getAnswer(currentQues: any, options: any) {
        if(currentQues === this.questionList.length){
            this.quizCompleted=true;
            this.stopCounter()
        }
        if (options.correct) {
            this.points += 10;
            this.correctAnswer++;
            setTimeout(() => {
                this.currentQuestionNumber++;
                this.resetCounter();
                this.getProgressPercentage();
            }, 1000);
        } else {
            this.points -= 10;
            this.incorrectAnswer++;
            setTimeout(() => {
                this.currentQuestionNumber++;
                this.resetCounter();
                this.getProgressPercentage();
            }, 1000);

        }
    }

    startCounter() {
        this.interval$ = interval(1000).subscribe(val => {
            this.counter--;
            if (this.counter === 0) {
                this.points -= 10;
                this.currentQuestionNumber++;
                this.counter = 60;
            }
        });
        setTimeout(() => {
            this.interval$.unsubscribe();
            this.getProgressPercentage();
        }, 600000);
    }

    stopCounter() {
        this.interval$.unsubscribe();
        this.counter = 0;
    }

    resetCounter() {
        this.stopCounter();
        this.counter = 60;
        this.startCounter();
    }

    resetQuiz() {
        this.resetCounter();
        this.getAllQuestion();
        this.points = 0;
        this.counter = 60;
        this.currentQuestionNumber = 0;
        this.getProgressPercentage();
    }

    getProgressPercentage() {
        this.progress = ((this.currentQuestionNumber / this.questionList.length) * 100).toString();
        return this.progress;
    }

}