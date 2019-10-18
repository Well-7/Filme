import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Filme, FilmesService } from '../filmes.service';
import { Observable } from 'rxjs';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  filmes: Observable<Filme[]>;
  status = 'pendente';

  constructor(
    private filmesService: FilmesService,
    private socialSharing: SocialSharing,
    public router: Router,
  ) {}

  ionViewWillEnter() {
    this.listar();
  }

  listar() {
    this.filmes = this.filmesService.listar(this.status);
  }

  assistir(filme) {
    this.filmesService.assistir(filme);
    this.listar();
  }

  inserir() {
    this.router.navigate(["cadastro"]);
  }
  remover(filme) {
    this.filmesService.remover(filme);
  }
  compartilhar(filme: Filme) {
    const mensagem = `Estou compartilhando o filme ${filme.nome}`;
    console.log(mensagem);
    this.socialSharing.share(mensagem, filme.nome);
  }
}
