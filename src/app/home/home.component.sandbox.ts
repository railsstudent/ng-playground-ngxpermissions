import { sandboxOf } from 'angular-playground';
import { NgxPermissionsModule } from 'ngx-permissions';
import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';

export default sandboxOf(HomeComponent, {
    label: 'ngx-permissions',
    declareComponent: false,
    imports: [HomeModule, NgxPermissionsModule.forRoot()],
}).add('Home Component', {
    template: `<app-home></app-home>`,
    context: {},
});
