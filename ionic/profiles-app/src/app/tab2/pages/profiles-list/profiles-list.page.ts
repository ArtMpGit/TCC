import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user.interface';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profiles-list.page.html',
  styleUrls: ['profiles-list.page.scss'],
})
export class ProfilesListPage implements OnInit {

  users: Array<User>;

  constructor(private profileService: ProfilesService) {}

  ngOnInit() {
    this.retrieveUsers();
  };
  
  retrieveUsers = (): void => {
    this.profileService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
