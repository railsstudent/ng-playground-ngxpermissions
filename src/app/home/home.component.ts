import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private service: NgxPermissionsService) {
  }

  permissionsMap: {[key: string]: boolean} = {}

  ngOnInit() {
    this.service.loadPermissions(['Guest']);
  }

  addPermissions(permissions: string[]) {
    this.service.addPermission(permissions)
    permissions.forEach(p => { 
      this.permissionsMap[p] = true;
    });
  }

  removePermission(permissions: string[]) {
    permissions.forEach(permission => {
      this.service.removePermission(permission);
      delete this.permissionsMap[permission];
    });
  }
}
