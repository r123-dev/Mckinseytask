import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { CandidateListComponent } from './modules/candidate/candidate-list/candidate-list.component';
import { QuestionListComponent } from './modules/question/question-list/question-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'candidates', component: CandidateListComponent },
    { path: 'questions', component: QuestionListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
