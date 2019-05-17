import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepperTestsComponent } from './stepper-tests/stepper-tests.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ListUserComponent } from './list-user/list-user.component';
const routes: Routes = [{
  path: 'customers',
  loadChildren: './customers/customers.module#CustomersModule'

},
{
  path: 'orders',
  loadChildren: './orders/orders.module#OrdersModule'

},
{
  path: 'messages',
  loadChildren: './messages/messages.module#MessagesModule'

},
{
  path: 'home',
  component: StepperTestsComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'login',
  component: LoginComponent
}
  ,
{
  path: 'users',
  component: ListUserComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
