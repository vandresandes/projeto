import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataRecaptchaService {

  private siteVerify: string = "/recaptcha/api/siteverify"; //"https://www.google.com/recaptcha/api/siteverify";
  private secretKey: string = "6Ldbwn4UAAAAAOmR4keKGDmqittT1FhjC1HgHEpv";
  private secretKeyInvisible: string = "6LeIyX4UAAAAAMjiKxC7h5a1SEWfOCatoGpkjovj";

  constructor(private http : Http) { }


  post(response: string, invisible: boolean = true) {
    let params = `secret=${this.getSecretKey(invisible)}&response=${response}`;
    let url = `${this.siteVerify}?${params}`;
    return this.http.post(url, null).map(res=> res.json());
  }

  getSecretKey(invisible: boolean) {
    return invisible ? this.secretKeyInvisible : this.secretKey;
  }

}
