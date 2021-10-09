import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user.interface';

@Injectable()
export class ProfilesService {
  constructor(private http: HttpClient) {}

  getUsers = (): Observable<Array<User>> =>
    this.http
      .get<Array<User>>(`${environment.apiUrl}/users`, {
        params: { per_page: 100 },
      })
      .pipe(take(1));

  getUser = (userName: string): Observable<User> =>
    this.http
      .get<User>(`${environment.apiUrl}/users/${userName}`)
      .pipe(take(1));
}
