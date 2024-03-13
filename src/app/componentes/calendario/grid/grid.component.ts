import { Component, HostListener } from '@angular/core';
import { DiaComponent } from '../dia/dia.component';
import { getDias } from '../../../funciones/getDias';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [DiaComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  dias=[...getDias()]
  @HostListener('click',['$event'])
  handlerClick(ev:Event){
    ev.stopPropagation();
    const nodo= (ev.composedPath() as HTMLElement[]).find(n=> n.dataset && 'dia' in n.dataset)
    if (nodo){
        console.log(nodo?.dataset['dia'])
    }
    //console.log((ev.target as HTMLElement).dataset["dia"])
  }

}
