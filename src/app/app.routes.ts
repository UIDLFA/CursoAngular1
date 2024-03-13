import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"pagina1/:id",loadComponent:()=>import('./componentes/pages/pagina1/pagina1.component').then((c) => c.Pagina1Component)
    },
    {
        path:"pagina2",loadComponent:()=>import('./componentes/pages/pagina2/pagina2.component').then((c) => c.Pagina2Component)
    },
    {
        path:"pagina3",loadComponent:()=>import('./componentes/pages/pagina3/pagina3.component').then((c) => c.Pagina3Component)
    }

];
