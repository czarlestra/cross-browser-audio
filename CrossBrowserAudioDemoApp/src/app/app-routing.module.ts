import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'demo', component: DemoComponent },
  { path: '', redirectTo: '/intro', pathMatch: 'full' } 
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
