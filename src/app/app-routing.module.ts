import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { EditUserComponent } from './views/edit-user/edit-user.component';
import { HelpComponent } from './views/help/help.component';
import { SingleUserComponent } from './views/single-user/single-user.component';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpComponent },
  { path: 'users/:id', component: SingleUserComponent },
  { path: 'edit/:id', component: EditUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
