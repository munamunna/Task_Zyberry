import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

import { ServiceComponent } from './service/service.component';
import { AuthService } from './service/auth.service';
import { ContactComponent } from './contact/contact.component';
import { ChatComponent } from './chat/chat.component'; // Import the AuthService

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    ServiceComponent,
         ContactComponent,
         ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
