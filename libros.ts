
export class Libro {
    private _titulo: string;
    private _autor: string;
    private _genero: string;
    private _añoPublicacion: number;
  
    constructor(titulo: string, autor: string, genero: string, añoPublicacion: number) {
      this._titulo = titulo;
      this._autor = autor;
      this._genero = genero;
      this._añoPublicacion = añoPublicacion;
    }
  
    public get titulo(): string {
      return this._titulo;
    }
  
    public set titulo(titulo: string) {
      this._titulo = titulo;
    }
  
    public get autor(): string {
      return this._autor;
    }
  
    public set autor(autor: string) {
      this._autor = autor;
    }
  
    public get genero(): string {
      return this._genero;
    }
  
    public set genero(genero: string) {
      this._genero = genero;
    }
  
    public get añoPublicacion(): number {
      return this._añoPublicacion;
    }
  
    public set añoPublicacion(añoPublicacion: number) {
      this._añoPublicacion = añoPublicacion;
    }
  }