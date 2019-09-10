import { Component , OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

import { UserService } from '../../../services/api.service';
import { User } from '../../../modules/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {

  ELEMENT_DATA: User[];

  displayedColumns: string[] = ['userId', 'name', 'city', 'active', 'src', 'delete'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(private userService: UserService) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.ELEMENT_DATA = this.userService.getUsers();
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onClickDelete(userId: number) {
    let useridx: number;
    this.ELEMENT_DATA.forEach((user, idx) => {
        if (user.userId === userId) { useridx = idx; }
    });
    this.ELEMENT_DATA.splice(useridx, 1);
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort;
  }
}
