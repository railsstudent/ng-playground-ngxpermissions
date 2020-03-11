import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-playground-ngxpermissions';

  constructor(private service: NgxPermissionsService) {}

  ngOnInit(): void {
    this.service.loadPermissions(['Guest']);
  }

}
