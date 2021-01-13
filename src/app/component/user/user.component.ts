import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { MessageService } from '../../services/message.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
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
    public dialog: MatDialog
  ) {
    this.userData = JSON.parse(localStorage.getItem('currentuser'));
    this.alreadyTodo = JSON.parse(
      localStorage.getItem(`${this.userData[0].username}`)
    );
  }
  ngOnInit(): void {}
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
}
