import { DomSanitizer } from '@angular/platform-browser';
import { RelationsDocumentum } from './../../enums/RelationsDocumentum';
import { Component, OnInit, ViewChild, Pipe, PipeTransform } from '@angular/core';
import { CodigoValidacaoService } from 'src/app/service/codigo-validacao.service';
import { RecaptchaComponent } from '../recaptcha/recaptcha.component';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-codigo-validacao',
  templateUrl: './codigo-validacao.component.html',
  styleUrls: ['./codigo-validacao.component.scss']
})
export class CodigoValidacaoComponent implements OnInit {

  title: string = "Validar Documento";
	lbCodigoValidacao: string = "Código de validação:";
	getData;
	idCurrent: string;
	pdf: string = "";
	hidePdf: boolean = true;
	hideMsgNaoEncontrad: boolean = true;
	urlDql: string = "/dctm-rest/repositories/PGE_DEV1?dql=";
	msgNaoEncontrado: string = "Não encontrado!";
	codigoValidacao1: string = null;
	codigoValidacao2: string = null;
	codigoValidacao3: string = null;
	codigoValidacao4: string = null;
	lbLimpar: string = "Limpar";
  codigoValidacao: string;

  @ViewChild('captchaElem') captchaElem: RecaptchaComponent;

	constructor(private codigoValidacaoService: CodigoValidacaoService) {}

	ngOnInit() {
    this.focus();
	}

	tabCodigoValidacao(event: KeyboardEvent) {
		this.resetVariaveis();
		let element = (<HTMLInputElement>event.target);
		let value = element.value;
		let length: number = value.length;
		let key_tab: number = 9;

		// ignorar quando apertar a tecla 'tab'
		if (key_tab == event.keyCode || length < 4) {
			return;
		}

		element.value = value.substr(0, 4);
		this.proximoCampo(element);

		this.codigoValidacao = this.concatenarCodigoValidacao();
		if (this.codigoValidacao.length == 16) {
			this.captchaElem.execute();
		}
	}

	respostaRecaptcha(respostaRecaptcha: boolean = false) {
		console.log('Resposta do reCAPTCHA >>>> ', respostaRecaptcha);
		if (respostaRecaptcha) {
			this.pesquisarPorCodigoValidacao();
		}
	}

	pesquisarPorCodigoValidacao() {
		if (this.codigoValidacao === null || this.codigoValidacao === '' || this.codigoValidacao.length !== 16) {
			return;
		}

		let dql = this.criarDqlBuscarUltimoDocumentoPorId(this.codigoValidacao);
		let url = `${this.urlDql}${dql}`;

		this.codigoValidacaoService.get(url).subscribe(
			data => {
        this.getData =  data,
        this.idCurrent = this.getData.hasOwnProperty('entries') ? this.getData['entries']['0']['title'] : null,
				this.pesquisarPdf(this.idCurrent)
			},
			error => alert(error), () => console.log('pesquisarPorCodigoValidacao: acesso a webapi get ok.')
		 );
	}

	pesquisarPdf(idCurrent: string) {
		if (idCurrent === null) {
			console.log("Não encontrado!");
			this.hideMsgNaoEncontrad = false;
			return;
		}
		let links : Array<string>;
		let url = this.criarUrlContentsContent(idCurrent);

		this.codigoValidacaoService.get(url).subscribe(
			data => {
				this.getData =  data,
        links = this.getData['links'],
        this.pdf = this.getLinkContentMedia(links),
        this.hidePdf = false
			},
			error => alert(error), () => console.log("pesquisarPdf: acesso a webapi get ok.")
		 );
  }

	concatenarCodigoValidacao(): string {
		let codigo: string = "";

		for (var i = 1; i < 5; i++) {
			let element = (<HTMLInputElement>document.getElementById("codigoValidacao"+i));
			let valor = element.value;
			if (valor !== null) {
				codigo += valor;
			} else {
				break;
			}
		}
		return codigo;
	}

	criarDqlBuscarUltimoDocumentoPorId(rObjectId): string {
		return `select d.r_object_id from dm_document d where d.object_name=(select d2.object_name from dm_sysobject d2 where d2.r_object_id='${rObjectId}')`;
	}

	criarUrlContentsContent(r_object_id): string {
		return `/dctm-rest/repositories/PGE_DEV1/objects/${r_object_id}/contents/content/`;
	}

	getLinkContentMedia(links) {
		for (var i = 0; i < links.length; i++) {
			var link = links[i];
			if (link.rel == RelationsDocumentum.CONTENT_MEDIA) {
        document.getElementById('documentoObject')['data']=link.href;
				return link.href;
			}
		}
		return null;
	}

	/**
	 * Altera o foco para o próximo campo.
	 */
	proximoCampo(element: HTMLInputElement) {
		let nextTabIndex = element.tabIndex + 1;
		$('[tabindex=' + nextTabIndex + ']').focus();
	}

	resetVariaveis(): void {
		this.pdf = "";
		this.hidePdf = true;
		this.idCurrent = null;
		this.hideMsgNaoEncontrad = true;
	}

	limpar(form): void {
		form.reset();
		this.resetVariaveis();
		this.focus();
	}

	getLengthCodigoValidacao(): number {
		return this.codigoValidacao != null ? this.codigoValidacao.length : 0;
	}

	focus(): void {
		$('[tabindex=' + 1 + ']').focus();
	}
}
