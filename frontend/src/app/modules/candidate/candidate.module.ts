import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [CandidateListComponent],
    imports: [CommonModule, HttpClientModule],
    exports: [CandidateListComponent]
})
export class CandidateModule { }
