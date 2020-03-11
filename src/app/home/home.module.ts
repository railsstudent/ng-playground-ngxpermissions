import { NgModule } from '@angular/core';
import { HomeCommonModule } from './home-common.module';

@NgModule({
  imports: [
    HomeCommonModule,
  ],
  exports: [HomeCommonModule]
})
export class HomeModule { }
