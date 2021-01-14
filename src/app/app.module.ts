import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './component/user/user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmBoxComponent } from './component/confirm-box/confirm-box.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ConfirmBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  entryComponents: [ConfirmBoxComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
