# Angular2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Instructions

Angularjs need default tools to run angular application<br/><br/>

- Node version 6 or above<br/>
  Command to check node version<br/>
  `node -v`
- Nuget Package Manager, npm version 6 or above<br/>
  Command to check npm version<br/>
  `npm -v`<br/>
  Command to install npm<br/>
  `npm install -g`
- Angularjs boiler plates are defined in angular cli<br/>
  Command to install angular cli<br/>
  `npm install -g @angular/cli`<br/>
  Command to check angular cli info<br/>
  `ng -v`<br/>
  Command to validate angularjs path<br/>
  `npm list -g @angular/cli --depth=0`
- Create angular app with basic templates<br/>
  Command to create angularjs application<br/>
  `ng new app-name --skip-install`

## Component and templates
- Template can be defined inline or in a file<br/>
Inline using `template` within decorator `@Component`<br/>
File using `templateUrl`<br/>
- Templates do not render `script` tags as they may induce scripting attacks. In practice the script tag is ignored as part of template rendering.
- Expression context<br/>
Assign component property to HTML attribute using brackets<br/>
`<img [src]="angularImagePath" alt="DC Comics">`<br/>
where angularImagePath is a component property.
- Statement expression<br/>
Events are triggered using <br/>
`<button (click)='delete()'>x<button>`
- Binding syntax<br/>
Binding can be grouped as `source to view, view to source and two-way`
<table>
<tr><td>Source to View</td>
<td>{{Expression}} or [target]="expression" or bind-target="expression"</td>
</tr>
<tr>
<td>View to Source</td>
<td>(target)="statement" or on-target="statement"</td>
</tr>
<tr>
<td>Two Way</td>
<td>[(target)]="expression" or bindon-target="expression"</td>
</tr>
</table>

- Passing data to child from parent<br/>
`@Input property-name`<br/>

- Class attribute<br/>
`<p [class.col-green]="isGreen">`

- Emit event from child to parent<br/>
create event emiter `@Output() deleteRequest = new EventEmmiter<Hero>();`
<br/>

On delete click, emit hero object 
```
delete() { 
  this.deleteRequest.emit(this.hero); 
}
```
In component element of parent handle deleteRequest<br/>
`<app-hero-component (deleteRequest)="deleteHero($event)" />`<br/>
- [Built-in attribute directive](https://angular.io/guide/template-syntax#built-in-attribute-directives)<br/>

  - [NgClass](https://angular.io/guide/template-syntax#ngclass)<br/>
For single css class setter, 
`<div [class.special]="isSpecial">The class binding is special</div>`<br/>
For multi-class setter, 
`<div [ngClass]="currentClasses">This div is initially saveable, unchanged, and special</div>` where 
`currentClass` is a object property containing all the class names and boolean value.<br/>

  - [NgStyle](https://angular.io/guide/template-syntax#ngstyle)<br/>
For single style setter, 
`<div [style.font-size]="isSpecial ? 'x-large' : 'smaller'" >This div is x-large or smaller.</div>`<br/>
For multi-style setter, 
`<div [ngStyle]="currentStyles">This div is initially italic, normal weight, and extra large (24px)</div>` where `currentStyle` is a object property containing all the style names and respective values.<br/>

  - [NgModel](https://angular.io/guide/template-syntax#ngmodel---two-way-binding-to-form-elements-with-ngmodel)<br/>
  `<input [(ngModel)]="currentHero.name">`
  <br/>

- [Built-in structural directives](https://angular.io/guide/template-syntax#built-in-structural-directives)<br/>
  - [NgIf](https://angular.io/guide/template-syntax#ngif)<br/>
`<app-hero-detail *ngIf="isActive"></app-hero-detail>`<br/><br/>

  - [NgForOf](https://angular.io/guide/template-syntax#ngforof) <br/>
`<div *ngFor="let hero of heroes">{{hero.name}}</div>`<br/>
The string assigned to *ngFor is not a template expression. It's a microsyntax — a little language of its own that Angular interprets. The string "let hero of heroes" means:
Take each hero in the heroes array, store it in the local hero looping variable, and make it available to the templated HTML for each iteration.<br/>

- [Template input variable](https://angular.io/guide/template-syntax#template-input-variables)<br/>
  - [NgFor with index](https://angular.io/guide/template-syntax#template-input-variables), <br/>
  `<div *ngFor="let hero of heroes; let i=index">{{i + 1}} - {{hero.name}}</div>`
  <br/><br/>

  - [NgFor with trackby](https://angular.io/guide/template-syntax#ngfor-with-trackby), <br/>`<div *ngFor="let hero of heroes; trackBy: trackByHeroes">({{hero.id}}) {{hero.name}}</div>` where 
  `trackByHeroes` is used as function in component<br/>
  `trackByHeroes(index: number, hero: Hero): number { return hero.id; }`<br/><br/>

  - [NgSwitch](https://angular.io/guide/template-syntax#the-ngswitch-directives), <br/>

    ```
    <div [ngSwitch]="currentHero.emotion">
      <app-happy-hero    *ngSwitchCase="'happy'"    [hero]="currentHero"></app-happy-hero>
      <app-sad-hero      *ngSwitchCase="'sad'"      [hero]="currentHero"></app-sad-hero>
      <app-confused-hero *ngSwitchCase="'confused'" [hero]="currentHero"></app-confused-hero>
      <app-unknown-hero  *ngSwitchDefault           [hero]="currentHero"></app-unknown-hero>
    </div>
    ```

- [Template reference variables](https://angular.io/guide/template-syntax#template-reference-variables--var-)<br/>
A template reference variable is often a reference to a DOM element within a template.<br/>
`<input #phone placeholder="phone number">`<br/>
`<button (click)="callPhone(phone.value)">Call</button>`<br/>

- [Input and Output properties](https://angular.io/guide/template-syntax#input-and-output-properties)<br/>

- [Template expression operators](https://angular.io/guide/template-syntax#template-expression-operators)<br/>

- [Template expression operator](https://angular.io/guide/template-syntax#template-expression-operators)<br/>
  - [Pipe operator ( | )](https://angular.io/guide/template-syntax#the-pipe-operator---)
  - [Safe navigation operator and null property paths](https://angular.io/guide/template-syntax#the-safe-navigation-operator----and-null-property-paths)
  - [Non-null assertion operator ( ! )](https://angular.io/guide/template-syntax#the-safe-navigation-operator----and-null-property-paths)

## User Input
- Binding to user input events<br/>
`<button (click)="onClickMe()">Click me!</button>`

- [Get user input from the $event object](https://angular.io/guide/user-input#get-user-input-from-the-event-object)
`<input (keyup)="onKey($event)"><p>{{values}}</p>`
this is not a good practice.

- [Get user input from a template reference variable](https://angular.io/guide/user-input#get-user-input-from-a-template-reference-variable)
`<input #box (keyup)="0"><p>{{box.value}}</p>`
note the keyup event needs to be bound to some variable to #box to reference the input.

## Lifecycle Hooks
- [Lifecycle sequence](https://angular.io/guide/lifecycle-hooks#lifecycle-sequence)
  - ngOnChanges()
  - ngOnInit()
  - ngDoCheck()
  - ngAfterContentInit()
  - ngAfterContentChecked()
  - ngAfterViewInit()
  - ngAfterViewChecked()
  - ngOnDestroy()

## Component Interaction
- [Pass data from parent to child with input binding](https://angular.io/guide/component-interaction#pass-data-from-parent-to-child-with-input-binding)<br/>
using @Input decorations
- [Intercept input property changes with a setter
](https://angular.io/guide/component-interaction#intercept-input-property-changes-with-a-setter)<br/>
  ```
  import { Component, Input } from '@angular/core';
  
  @Component({
    selector: 'app-name-child',
    template: '<h3>"{{name}}"</h3>'
  })
  export class NameChildComponent {
    private _name = '';
  
    @Input()
    set name(name: string) {
      this._name = (name && name.trim()) || '<no name set>';
    }
  
    get name(): string { return this._name; }
  }
  ```
- [Parent listens for child event](https://angular.io/guide/component-interaction#parent-listens-for-child-event)<br/>
A parent component cannot use data binding to read child properties or invoke child methods. You can do both by creating a template reference variable for the child element and then reference that variable within the parent template 

- [Parent interacts with child via local variable](https://angular.io/guide/component-interaction#parent-interacts-with-child-via-local-variable)<br/>
A parent component cannot use data binding to read child properties or invoke child methods. You can do both by creating a template reference variable for the child element and then reference that variable within the parent template 

- [Parent calls an @ViewChild()](https://angular.io/guide/component-interaction#parent-calls-an-viewchild)<br/>
The local variable approach is simple and easy. But it is limited because the parent-child wiring must be done entirely within the parent template. The parent component itself has no access to the child.

  You can't use the local variable technique if an instance of the parent component class must read or write child component values or must call child component methods.
  When the parent component class requires that kind of access, inject the child component into the parent as a ViewChild.

- [Parent and children communicate via a service](https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service)
  A parent component and its children share a service whose interface enables bi-directional communication within the family.

  The scope of the service instance is the parent component and its children. Components outside this component subtree have no access to the service or their communications.

## Component Styles
- [Using component styles](https://angular.io/guide/component-styles#using-component-styles)

- [Special selectors](https://angular.io/guide/component-styles#special-selectors)
  - `:host`
  , Use the :host pseudo-class selector to target styles in the element that hosts the component

  - `:host-context`
  , apply styles based on some condition outside of a component's view. For example, a CSS theme class could be applied to the document <body> element, and you want to change how your component looks based on that.
    ```
    :host-context(.theme-light) h2 {
      background-color: #eef;
    }
    ```
- [Loading component styles](https://angular.io/guide/component-styles#loading-component-styles)
  - Styles in component metadata
  - Style files in component metadata
  - Template inline styles
  - Template link tags
  - CSS @imports, 
  `@import './hero-details-box.css';` 
  in any *.css file

## Attribute Directives
An Attribute directive changes the appearance or behavior of a DOM element.<br/>

- Directives overview<br/>
Three kinds of directives in Angular:
  - Components - directives with a template.
  - Structural directives - change the DOM layout by adding and removing DOM elements.
  - Attribute directives - change the appearance or behavior of an element, component, or another directive.

## Structural Directives
Structural directives are responsible for HTML layout. They shape or reshape the DOM's structure, typically by adding, removing, or manipulating elements.

As with other directives, you apply a structural directive to a host element. The directive then does whatever it's supposed to do with that host element and its descendants.

Structural directives are easy to recognize. An asterisk (*) precedes the directive attribute name as in this example.<br/>
`<div *ngIf="hero" class="name">{{hero.name}}</div>`
<br/>
 common used Structural directives NgIf, NgFor and NgSwitch.

- [NgIf](https://angular.io/guide/structural-directives#ngif-case-study)<br/>
  ```
  <p *ngIf="true">
    Expression is true and ngIf is true.
    This paragraph is in the DOM.
  </p>
  <p *ngIf="false">
    Expression is false and ngIf is false.
    This paragraph is not in the DOM.
  </p>
  ```
- [NgFor](https://angular.io/guide/structural-directives#inside-ngfor)<br/>
  ```
  <div *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById" [class.odd]="odd">
  ({{i}}) {{hero.name}}
  </div>
  ```
- [NgSwitch](https://angular.io/guide/structural-directives#inside-ngswitch-directives)<br/>
  ```
  <div [ngSwitch]="hero?.emotion">
  <app-happy-hero    *ngSwitchCase="'happy'"    [hero]="hero"></app-happy-hero>
  <app-sad-hero      *ngSwitchCase="'sad'"      [hero]="hero"></app-sad-hero>
  <app-confused-hero *ngSwitchCase="'app-confused'" [hero]="hero"></app-confused-hero>
  <app-unknown-hero  *ngSwitchDefault           [hero]="hero"></app-unknown-hero>
  </div>
  ```

## Pipes
A pipe takes in data as input and transforms it to a desired output.<br/>
`<p>The hero's birthday is {{ birthday | date }}</p>`<br/>
`<p>The hero's birthday is {{ birthday | date:"MM/dd/yy" }} </p>`<br/>
- [Custom pipes](https://angular.io/guide/pipes#custom-pipes)
  ```
  import { Pipe, PipeTransform } from '@angular/core';
  /*
  * Raise the value exponentially
  * Takes an exponent argument that defaults to 1.
  * Usage:
  *   value | exponentialStrength:exponent
  * Example:
  *   {{ 2 | exponentialStrength:10 }}
  *   formats to: 1024
  */
  @Pipe({name: 'exponentialStrength'})
  export class ExponentialStrengthPipe implements PipeTransform {
    transform(value: number, exponent: string): number {
      let exp = parseFloat(exponent);
      return Math.pow(value, isNaN(exp) ? 1 : exp);
    }
  }

  <p>Super power boost: {{2 | exponentialStrength: 10}}</p>
  ```

