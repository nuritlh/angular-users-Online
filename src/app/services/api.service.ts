import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// import { User } from '../modules/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    return [
      {
          userId: 0,
          name: 'Mary Craig',
          city: 'Colorado',
          active: true,
          src: '../../../../assets/image/user1.png'
      },
      {
          userId: 1,
          name: 'Duane Newton',
          city: 'San Francisco',
          active: false,
          src: '../../../../assets/image/user2.png'
      },
      {
          userId: 2,
          name: 'Tonu Ruiz',
          city: 'London',
          active: true,
          src: '../../../../assets/image/user3.png'
      },
      {
          userId: 3,
          name: 'Julia Gonzalez',
          city: 'Tel Aviv',
          active: true,
          src: '../../../../assets/image/user4.png'
      }
    ];
  }
}
