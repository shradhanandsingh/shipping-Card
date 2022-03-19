import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './layout/question/question.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';


const routes: Routes = [
    {
        path:'', redirectTo: 'welcome', pathMatch: 'full'
    
    },
    {
        path: 'welcome', component: WelcomeComponent 
    },
    {
        path: 'question', component: QuestionComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const COMPONENTS = [
    WelcomeComponent,
    QuestionComponent
  ]
