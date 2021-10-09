import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details/profile-details.component';
import { ProfilesListPage } from './pages/profiles-list/profiles-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilesListPage,
  },
  {
    path: ':username',
    component: ProfileDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilesRoutingModule {}
