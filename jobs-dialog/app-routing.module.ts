import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminStudentComponent } from './admin-student/admin-student.component';
const routes: Routes = [{ path: 'admin', component: AdminStudentComponent }]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
