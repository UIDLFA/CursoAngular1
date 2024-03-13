import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  dialogo = viewChild<ElementRef>('dialogo');

  open(){
    console.log('open')    
    const dialog2:HTMLDialogElement = this.dialogo()?.nativeElement;
    dialog2.showModal();
  }
}

