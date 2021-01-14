import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { MessageService } from '../../services/message.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showPassword = false;
  user = {
    name: '',
    password: '',
  };
  constructor(
    public dataService: GlobalService,
    public messageService: MessageService,
    public router: Router
  ) {
    console.log('object :>> ', dataService.users);
  }
  ngOnInit(): void {}
  submitLogin(loginUserData: {}) {
    let data = this.dataService.users.filter((v, i) => {
      return (
        v.username == loginUserData['name'] &&
        v.password == loginUserData['password']
      );
    });
    if (data.length > 0) {
      this.messageService.openSnackBar('login sucessfull', true);
      localStorage.setItem('currentuser', JSON.stringify(data));
      this.router.navigate(['user']);
    } else {
      this.messageService.openSnackBar('user not found', false);
    }
  }
}
