import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  listUser: any[];
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.userservice.getUer().subscribe(res => {
      this.listUser = res;
    })
  }

}
