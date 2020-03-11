import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterTestingModule } from '@angular/router/testing';
import { PlaygroundModule } from 'angular-playground';

PlaygroundModule
  .configure({
    selector: 'app-root',
    overlay: false,
    modules: [RouterTestingModule],
  });

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
