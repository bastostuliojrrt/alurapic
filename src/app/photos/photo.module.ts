import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';

@NgModule({

  declarations: [ // Todos os componentes importados
    PhotoComponent, 
    PhotoListComponent, 
    PhotoFormComponent, 
    PhotosComponent,
    FilterByDescription
  ],

  imports: [
    HttpClientModule,
    CommonModule
  ]

})

export class PhotoModule {}