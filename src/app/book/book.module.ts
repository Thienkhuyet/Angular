import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetaiComponent } from './book-detai/book-detai.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[{
path:'book/bookdetai',
component:BookDetaiComponent
}]
@NgModule({
  declarations: [BookDetaiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookModule { }
