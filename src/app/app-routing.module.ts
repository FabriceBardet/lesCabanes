import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'camp4',
    loadChildren: () => import('./camp4/camp4.module').then( m => m.Camp4PageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaPageModule)
  },
  {
    path: 'evenement',
    loadChildren: () => import('./evenement/evenement.module').then(m => m.EvenementPageModule)
  },
  {
    path: 'evenement/:id',
    loadChildren: () => import('./evenement/evenement.module').then(m => m.EvenementPageModule)
  },
  {
    path: 'navigation',
    loadChildren: () => import('./navigation/navigation.module').then( m => m.NavigationPageModule)
  },
  {
    path: 'presentation-cabanes',
    loadChildren: () => import('./presentation-cabanes/presentation-cabanes.module').then( m => m.PresentationCabanesPageModule)

  },
  {
    path: 'le-dome',
    loadChildren: () => import('./le-dome/le-dome.module').then( m => m.LeDomePageModule)
  },
  {
    path: 'la-table',
    loadChildren: () => import('./la-table/la-table.module').then( m => m.LaTablePageModule)
  },
  {
    path: 'bivouac',
    loadChildren: () => import('./bivouac/bivouac.module').then( m => m.BivouacPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
