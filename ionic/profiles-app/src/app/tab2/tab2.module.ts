import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProfilesService } from './services/profiles.service';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details/profile-details.component';
import { ProfilesListPage } from './pages/profiles-list/profiles-list.page';
import { ProfilesRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProfilesRoutingModule,
  ],
  declarations: [
    ProfilesListPage,
    ProfileCardComponent,
    ProfileDetailsComponent
  ],
  providers: [ProfilesService],
})
export class ProfileModule {}
