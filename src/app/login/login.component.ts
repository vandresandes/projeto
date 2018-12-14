import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { AlertService } from '../service/alert.service';
import { first } from 'rxjs/operators';
import { CodigoValidacaoService } from '@app/service/codigo-validacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  msgLogin: string = "Login";
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  home: string = "/codigo-validacao";

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {
        // redirecionar para home se já estiver logado
        if (this.authenticationService.currentUserValue) {
            this.router.navigate([this.home]);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // obter url de retorno dos parâmetros de rota ou padrão para home
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.home;
    }

    // conveniência getter para facilitar o acesso aos campos de formulário
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // pare aqui se o formulário for inválido
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.loginTemp().subscribe(
          data => {
            this.router.navigate([this.returnUrl])
          },
          error => alert(error), () => console.log("loginTemp ok.")
         );

        /*
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
        */
    }
}
