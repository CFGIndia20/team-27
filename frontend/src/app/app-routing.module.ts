import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterBatchComponent } from './register-batch/register-batch.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { CurrentSlotComponent } from './current-slot/current-slot.component';
import { TitleComponent } from './title/title.component';
import { TeacherBatchesComponent } from './teacher-batches/teacher-batches.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent,
    children :[
      { path:'profile',component:ProfileComponent },
      { path:'registerbatch',component: RegisterBatchComponent},
      { path:'viewjobs',component: ViewJobsComponent},
      { path:'currentbatch',component: CurrentSlotComponent},
      { path:'teacherbatch',component: TeacherBatchesComponent}
      
    ]
  },
  {path:'main',component:MainComponent,
  children :[
    {path:'login',component: LoginComponent},
    {path:'signup',component: SignupComponent},
    {path:'title',component:TitleComponent}
  ]
},
  {path:'',redirectTo:'/main/title',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
