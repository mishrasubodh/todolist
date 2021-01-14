import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarConfig,
} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: boolean) {
    let config = new MatSnackBarConfig();
    config.duration = 3000;
    config.panelClass = action ? ['green-snackbar'] : ['red-snackbar'];
    this._snackBar.open(message, '', config);
  }
}
