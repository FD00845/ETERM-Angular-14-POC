import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//import components
import { AppComponent } from './app.component';
import { TermLadingComponent } from './term-lading/term-lading.component'; 

//import Directives
import { OnlynumberDirective } from './Directives/onlynumber.directive';

//import services
import { CommonService } from './Services/Common.service';
import { HttpService } from './Services/Http.service';
import { PremiumComponent } from './premium/premium.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { FooterComponent } from './footer/footer.component';
import { DOBComponent } from './dob/dob.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
@NgModule({
  declarations: [
    AppComponent,
    TermLadingComponent,
    OnlynumberDirective,
    PremiumComponent,
    InsuranceComponent,
    FooterComponent,
    DOBComponent,
    UploadDocumentsComponent,
    PersonalDetailsComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }), 
    AppRoutingModule
  ],
  providers: [CommonService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
