import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
    questions: any[] = [];

    constructor(private questionService: QuestionService) {}

    ngOnInit() {
        this.questionService.getQuestions().subscribe((data: any[]) => {
            this.questions = data;
        });
    }
}
