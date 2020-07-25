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


import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    MainComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
