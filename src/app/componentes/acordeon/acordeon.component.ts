import { Component,ViewEncapsulation, effect, input } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  standalone: true,
  imports: [],
  templateUrl: './acordeon.component.html',
  styleUrl: './acordeon.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AcordeonComponent {
  title = input.required<String>();
  constructor(){
    effect(()=>{
      console.log(this.title);
    })
  }
}
