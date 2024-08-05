import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcostComponent } from './addcost/addcost/addcost.component';
import { AddprojectComponent } from './addproject/addproject/addproject.component';

const routes: Routes = [
  {path:'addcost' , component:AddcostComponent},
  {path:'addproject' , component:AddprojectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
