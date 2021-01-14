import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { MessageService } from '../../services/message.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  editData = false;
  userData;
  alreadyTodo;

  currentedutableIndex;
  user = {
    newTodo: '',
    status: '',
  };
  options: string[] = ['pending ', 'done', 'fail'];
  constructor(
    public global: GlobalService,
    public msg: MessageService,
    public dialog: MatDialog,
    public router: Router
  ) {
    this.userData = JSON.parse(localStorage.getItem('currentuser'));
    console.log('this.userData :>> ', this.userData);
    if (this.userData == null) {
      this.msg.openSnackBar('please login first', false);
      this.router.navigate(['login']);
      return;
    }
    this.alreadyTodo = JSON.parse(
      localStorage.getItem(`${this.userData[0].username}`)
    );
  }

  addToList(todoData) {
    todoData['id'] = this.userData[0].id;
    if (this.editData == true) {
      this.global.SaveEditDataToLocalStorage(
        todoData,
        this.currentedutableIndex,
        this.userData[0].username
      );
      this.msg.openSnackBar('todo updated successful', true);
    } else {
      this.global.SaveDataToLocalStorage(todoData, this.userData[0].username);
      this.msg.openSnackBar('todo added successful', true);
    }

    this.alreadyTodo = JSON.parse(
      localStorage.getItem(`${this.userData[0].username}`)
    );

    this.user.newTodo = '';
    this.user.status = '';
    this.editData = false;
  }

  edit(currentData, i) {
    this.currentedutableIndex = i;
    this.user.newTodo = currentData.newTodo;
    this.user.status = currentData.status;
    this.editData = true;
  }

  delete(deleteData, i) {
    const dialogRef = this.dialog.open(ConfirmBoxComponent, {
      width: '30%',
      panelClass: 'custom-modalbox',
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.global.deletedata(`${this.userData[0].username}`, i);

        this.alreadyTodo = JSON.parse(
          localStorage.getItem(`${this.userData[0].username}`)
        );

        this.msg.openSnackBar('todo deleted successful', true);
      }
    });
  }

  goBack() {
    this.router.navigate(['login']);
  }
  logOut() {
    localStorage.removeItem('currentuser');
    this.router.navigate(['login']);
  }
  ngOnInit() {
    console.log('OnInit fired');
  }

  ngOnDestroy() {
    // localStorage.removeItem('currentuser');
    // this.router.navigate(['login']);
    console.log('OnDestroy fired');
  }
}
