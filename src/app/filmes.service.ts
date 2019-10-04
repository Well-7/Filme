import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private filmesCollection: AngularFirestoreCollection<Filme>;
  filmes: Observable<Filme[]>;
  generos = [
    { descricao: 'Ação' },
    { descricao: 'Aventura' },
    { descricao: 'Terror' },
    { descricao: 'Suspense' },
    { descricao: 'Comédia' }
  ]

  constructor(private afs: AngularFirestore) {
    this.filmesCollection = afs.collection<Filme>('filmes');
    this.filmes = this.filmesCollection.valueChanges();
  }

  public inserir(filme: Filme) {
    const id = this.afs.createId();
    return this.filmesCollection.doc(id).set({...filme, id});
  }

  public remover(filme: Filme) {
    return this.filmesCollection.doc(filme.id).delete();
  }

  public assistir(filme: Filme) {
    return this.filmesCollection.doc(filme.id).update({status: 'assistido'});
    console.log(status);
  }

  public listar(status: string): Observable<Filme[]> {
    return this.filmes;
  }

  public listarGeneros(): Array<Genero> {
    return this.generos;
  }
}

export class Filme {
  id: string;
  nome: string;
  genero: Genero;
  duracao: number;
  status: string;
  constructor() {
    this.status = 'pendente';
  }
  public assistir() {
    this.status = 'assistido';
  }
}

export class Genero {
  descricao: string;
}
