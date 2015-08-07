import { Component, View, bootstrap, coreDirectives } from 'angular2/angular2';
import { Inject } from 'angular2/di';
import { InformationsService } from 'js/InformationsService.ts';

@Component({
  selector: 'hello',
  appInjector: [InformationsService]
})
@View({
    template: `<span *ng-if="name">Hello, {{name}}!</span>`,
    directives: [coreDirectives]
})
export class Hello {
  name: string = 'World';
  constructor(@Inject(InformationsService) informationsService) {
    /* use service */
    console.log("-> version", informationsService.getVersion());
    console.log("-> applicationName", informationsService.getApplicationName());

    setTimeout(() => {
      this.name = 'NEW WORLD'
    }, 2000);
  }
}

bootstrap(Hello, [InformationsService]);