import { Component, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiaComponent } from './componentes/calendario/dia/dia.component';
import { GridComponent } from "./componentes/calendario/grid/grid.component";
import { CounterComponent } from "./componentes/signal/counter/counter.component";
import { TimerComponent } from "./componentes/signal/timer/timer.component";
import { LayoutComponent } from "./componentes/pages/layout/layout.component";
import { AcordeonComponent } from "./componentes/acordeon/acordeon.component";
import { ModalComponent } from './componentes/modal/modal.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DiaComponent, GridComponent, CounterComponent, TimerComponent, LayoutComponent, AcordeonComponent,ModalComponent]
})
export class AppComponent {
  title = 'curso-af7';
  modal = viewChild<ModalComponent>('modal')
  hClick(ev:Event){
    this.modal()?.open();
  }
}
