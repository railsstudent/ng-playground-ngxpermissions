import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCommonModule } from './home-common.module';
import { HomeComponent } from './home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes), HomeCommonModule],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
