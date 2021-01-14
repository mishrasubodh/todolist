import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {}
  users = [
    { id: 1, username: 'subodh', password: '12345' },
    { id: 2, username: 'gaurav', password: '12346' },
    { id: 3, username: 'vishal', password: '12347' },
    { id: 4, username: 'ramesh', password: '12348' },
    { id: 5, username: 'amit', password: '12349' },
  ];

  SaveDataToLocalStorage(data, username) {
    var a = [];
    a = JSON.parse(localStorage.getItem(`${username}`)) || [];
    a.push(data);
    localStorage.setItem(`${username}`, JSON.stringify(a));
  }

  SaveEditDataToLocalStorage(data, currentedutableIndex, username) {
    var alreadyTodo = [];
    alreadyTodo = JSON.parse(localStorage.getItem(`${username}`)) || [];
    var sdata = alreadyTodo.map((item, index) => {
      if (index == currentedutableIndex) {
        item.newTodo = data.newTodo;
        item.status = data.status;
      }
      return item;
    });
    localStorage.setItem(`${username}`, JSON.stringify(sdata));
  }

  deletedata(username, index) {
    var a = [];
    a = JSON.parse(localStorage.getItem(`${username}`)) || [];
    let forremoveData = a.filter((v, i) => {
      return i != index;
    });
    localStorage.setItem(`${username}`, JSON.stringify(forremoveData));
  }
}
