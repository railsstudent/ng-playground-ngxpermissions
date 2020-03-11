import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxPermissionsModule.forChild(),
  ],
  providers: [NgxPermissionsService],
  exports: [CommonModule, NgxPermissionsModule],
})
export class SharedModule { }
