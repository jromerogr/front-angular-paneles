import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { PanelListComponent } from './panel-list/panel-list.component';

const routes: Routes = [
  {path: '',component: PanelListComponent},
  {path: 'panel/:panelId',component: PanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
