import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';

const routes: Routes = [{
    path: '',
    component: MainComponent
  }, {
    path: 'table',
    loadChildren: () => import('./table/table.module').then(m => m.TableModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
