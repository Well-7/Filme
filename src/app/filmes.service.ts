import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  generos = [
    {descricao: 'Ação'},
    {descricao: 'Aventura'},
    {descricao: 'Terror'},
    {descricao: 'Suspense'},
    {descricao: 'Comédia'}
  ]

  constructor() { }

  public inserir(filme: Filme): boolean {
    console.log('estou inserindo');
    console.log(filme);
    return true;
  }

  public remover(filme: Filme): boolean {
    console.log('estou removendo');
    console.log(filme);
    return true;
  }

  public assistir(filme: Filme): boolean {
    console.log('estou assistindo');
    console.log(filme);
    return true;
  }

  public listar(status: string): Array<Filme> {
    console.log('estou listando');
    console.log(status);
    return [];
  }

  public ListarGeneros(): Array<Genero> {
    return this.generos;
  }
}

export class Filme {
  nome: string;
  genero: Genero;
  duracao: number;
  status: string;
}

export class Genero {
  descricao: string;
}
