import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user.interface';
import { ProfilesService } from 'src/app/tab2/services/profiles.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit {
  user: User;
  followers: Array<User>;
  repositories: Array<any>;

  constructor(
    private profilesService: ProfilesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.retrieveUserInfo();
  }

  retrieveUserInfo = (): void => {
    this.profilesService
      .getUser(this.activatedRoute.snapshot.params.username)
      .subscribe((user) => (this.user = user));
  };
}
