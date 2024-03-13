import { Component, viewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalComponent } from '../../modal/modal.component';

@Component({
    selector: 'app-pagina3',
    standalone: true,
    templateUrl: './pagina3.component.html',
    styleUrl: './pagina3.component.css',
    imports: [ModalComponent]
})
export class Pagina3Component {
  constructor(private route:ActivatedRoute){
    console.log(route.snapshot.queryParams)
  }
  modal = viewChild<ModalComponent>('modal')
  hClick(ev:Event){
    this.modal()?.open();
  }

}
