import { sandboxOf } from 'angular-playground';
import { NgxPermissionsService } from 'ngx-permissions';
import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';

export default sandboxOf(HomeComponent, {
  label: 'ngx-permissions',
  declareComponent: false,
  imports: [HomeModule],
  providers: [NgxPermissionsService],
  declarations: [],
})
  .add('Home Component', {
    template: `<app-home></app-home>`,
    context: {}
  });
