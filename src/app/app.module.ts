import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { routing }        from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodigoValidacaoComponent, SafePipe } from './components/codigo-validacao/codigo-validacao.component';
import { CaptchaComponent } from './components/captcha/captcha.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { HttpModule } from '@angular/http';
import { RecaptchaComponent } from './components/recaptcha/recaptcha.component';
import { FooterComponent } from './components/footer/footer.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './components/alert/alert.component';
import { RegisterComponent } from './register/register.component';
import { JwtInterceptor, ErrorInterceptor } from './helpers';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    NavComponent,
    AboutComponent,
    CodigoValidacaoComponent,
    CaptchaComponent,
    RecaptchaComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    ButtonModule,
    InputTextModule,
    TooltipModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // Locale da aplicação
    { provide: LOCALE_ID, useValue:'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
