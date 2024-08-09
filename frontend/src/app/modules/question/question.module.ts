import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionListComponent } from './question-list/question-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [QuestionListComponent],
    imports: [CommonModule, HttpClientModule],
    exports: [QuestionListComponent]
})
export class QuestionModule { }
