import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeServiceService } from './employee/employee-service.service';
// import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule 
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
