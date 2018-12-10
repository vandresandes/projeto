import { DataRecaptchaService } from './../../service/data-recaptcha.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss']
})
export class CaptchaComponent implements OnInit {
  protected aFormGroup: FormGroup;
  private siteKey = "6Ldbwn4UAAAAANJl9KDRMdz3J-3TJThLRCFJOzUI"; // Google reCAPTCHA2
  private lang = "pt-BR"; // en
  private theme = "light"; //dark
  private size = "normal"; //"compact";
  private type = "image"; //"audio";
  private exibir: boolean;
  private signin;
  private resultado;

  constructor(private formBuilder: FormBuilder, private dataRecaptchaService: DataRecaptchaService) { }

  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  handleSuccess(event) {
    this.post(event);
    console.log(event);
  }

  handleReset() {
    this.exibir = false;
    console.log("handleReset...");
  }

  handleReady() {
    console.log("handleReady...");
  }

  handleExpire() {
    this.exibir = false;
    console.log("handleExpire...");
  }

  /**
   * Opcional. O nome da sua função de retorno de chamada a ser executada assim que todas as dependências forem carregadas.
   */
  handleLoad() {
    this.exibir = false;
    console.log("handleLoad...");
  }

  handleReload() {
    console.log("handleReload...");
  }

  post(response: string) {
    this.dataRecaptchaService.post(response, false).subscribe(
      data => {
        this.resultado = JSON.stringify(data),
        this.exibir = data['success'],
        console.log(this.resultado)
      },
      error => {console.log("error acesso a webapi post..."), console.log(error)}, () => console.log("acesso a webapi post ok...")
      );
    }

}
