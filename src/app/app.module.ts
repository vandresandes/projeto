import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, SafePipe } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { Interceptor } from './auth/interceptor.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodigoValidacaoComponent } from './components/codigo-validacao/codigo-validacao.component';
import { CaptchaComponent } from './components/captcha/captcha.component';
import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { HttpModule } from '@angular/http';
import { RecaptchaComponent } from './components/recaptcha/recaptcha.component';
import { FooterComponent } from './components/footer/footer.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';



@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    NavComponent,
    AboutComponent,
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
