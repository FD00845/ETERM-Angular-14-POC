import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermLadingComponent } from './term-lading/term-lading.component'; 
import { PremiumComponent } from './premium/premium.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
const routes: Routes = [
  { path: '', component: TermLadingComponent, pathMatch: 'full' },
  { path: 'premium', component: PremiumComponent},
  { path: 'insurance', component: InsuranceComponent},
  { path: 'UploadDocuments', component: UploadDocumentsComponent},
  { path: 'personal-details', component: PersonalDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
