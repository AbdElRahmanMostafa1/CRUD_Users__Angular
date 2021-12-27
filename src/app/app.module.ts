import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { UsersComponent } from './views/users/users.component';
import { AboutComponent } from './views/about/about.component';
import { HelpComponent } from './views/help/help.component';
import { SingleUserComponent } from './views/single-user/single-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './views/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    AboutComponent,
    HelpComponent,
    SingleUserComponent,
    AddUserComponent,
    EditUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
