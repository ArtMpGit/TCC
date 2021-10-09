import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  @Input() user: User;

  constructor(private router: Router) {}

  navigateToUserDetails = (): Promise<boolean> =>
    this.router.navigateByUrl(`users/${this.user.login}`);
}
