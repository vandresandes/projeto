import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, SafePipe } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Interceptor } from './auth/interceptor.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodigoValidacaoComponent } from './codigo-validacao/codigo-validacao.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { HttpModule } from '@angular/http';
import { RecaptchaComponent } from './recaptcha/recaptcha.component';
import { FooterComponent } from './footer/footer.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';



@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CodigoValidacaoComponent,
    CaptchaComponent,
    RecaptchaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  Interceptor,
    HttpClientModule,
    HttpModule,
	  PdfViewerModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    TooltipModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
