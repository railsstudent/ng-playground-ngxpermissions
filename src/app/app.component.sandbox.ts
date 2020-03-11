import { sandboxOf } from 'angular-playground';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

export default sandboxOf(AppComponent, {
  label: 'app',
  declareComponent: false,
  imports: [
    AppModule,    
  ],
  providers: [],
})
  .add('App Component', {
    template: `<app-root></app-root>`,
    context: {}
  });
