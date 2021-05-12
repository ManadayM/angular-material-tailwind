import { Component } from '@angular/core';

@Component({
  selector: 'ev-root',
  template: `

  <h1 style="my-8 text-center text-6xl font-bold"><span style="text-teal-500">TailwindCSS</span> and <span style="text-red-500">Angular</span> is awesome!</h1>
  <div style="display: flex; justify-content: space-around; margin: 20px 0">
    <button mat-raised-button color="primary">Primary Button</button>
    <button mat-raised-button color="accent">Accent Button</button>
    <button mat-raised-button color="warn">Warn Button</button>
  </div>
  <p style="margin: 2rem 0; text-align: center; font-size: 1.875rem;">Thanks for reading!</p>

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elevate-mobile';
}
