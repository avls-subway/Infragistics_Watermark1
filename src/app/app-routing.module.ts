import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Grid_testComponent } from './grid_test/grid_test.component';

const routes: Routes = [{ path: '', component: Grid_testComponent, data: { text: 'grid_test' } }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
