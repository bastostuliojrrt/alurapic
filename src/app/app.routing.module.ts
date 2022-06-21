import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotListResolver } from './photos/photo-list/photos-list.resolver';

const routes: Routes = [
  {path: 'user/:userName', component: PhotoListComponent, resolve: {photos: PhotListResolver} },
  {path: 'p/add', component: PhotoFormComponent },
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), //pegar o routes de dentro do arquivo
  ],

  exports: [
    RouterModule
  ]

})

export class AppRoutingModule{}