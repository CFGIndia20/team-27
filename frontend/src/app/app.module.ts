import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';

import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterBatchComponent } from './register-batch/register-batch.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { CurrentSlotComponent } from './current-slot/current-slot.component';
import { TitleComponent } from './title/title.component';
import { TeacherBatchesComponent } from './teacher-batches/teacher-batches.component';
import { TeacherAttendanceComponent } from './teacher-attendance/teacher-attendance.component';
import { AdminVerifyComponent } from './admin-verify/admin-verify.component';
import { AdminCreatebatchComponent } from './admin-createbatch/admin-createbatch.component';
import { AdminRequestsComponent } from './admin-requests/admin-requests.component';
import { AdminJobsComponent } from './admin-jobs/admin-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    MainComponent,
    ProfileComponent,
    RegisterBatchComponent,
    ViewJobsComponent,
    CurrentSlotComponent,
    TitleComponent,
    TeacherBatchesComponent,
    TeacherAttendanceComponent,
    AdminVerifyComponent,
    AdminCreatebatchComponent,
    AdminRequestsComponent,
    AdminJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    ReactiveFormsModule,
    MatTableModule,
    MatExpansionModule,
    MatGridListModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
