import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SecondpagesComponent } from './secondpages/secondpages.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "secondpages", component: SecondpagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
