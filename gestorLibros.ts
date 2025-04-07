import * as readline from 'readline-sync';
import { Libro } from './libros';

export class GestorLibros {
  private libros: Libro[] = [];

  public menu(): void {
    console.log('1. Insertar libro');
    console.log('2. Consultar libro');
    console.log('3. Modificar libro');
    console.log('4. Eliminar libro');
    console.log('5. Ver lista libros');
    console.log('6. Salir');

    let opcion = readline.question('Ingrese su opcion: ');
    switch (opcion) {
      case '1':
        this.insertarLibro();
        break;
      case '2':
        this.consultarLibro();
        break;
      case '3':
        this.modificarLibro();
        break;
      case '4':
        this.eliminarLibro();
        break;
      case '5':
        this.verListaLibros();
        break;
      case '6':
        console.log('Adios!');
        break;
      default:
        console.log('Opcion invalida!');
        this.menu();
    }
  }

  private insertarLibro(): void {
    let titulo = readline.question('Ingrese el titulo del libro: ');
    let autor = readline.question('Ingrese el autor del libro: ');
    let genero = readline.question('Ingrese el genero del libro: ');
    let añoPublicacion = parseInt(readline.question('Ingrese el año de publicacion del libro: '));
    let libro = new Libro(titulo, autor, genero, añoPublicacion);
    this.libros.push(libro);
    console.log('Libro agregado con exito!');
    this.menu();
  }

  private consultarLibro(): void {
    let titulo = readline.question('Ingrese el titulo del libro a consultar: ');
    let libro = this.libros.find((libro) => libro.titulo === titulo);
    if (libro) {
      console.log(`Titulo: ${libro.titulo}`);
      console.log(`Autor: ${libro.autor}`);
      console.log(`Genero: ${libro.genero}`);
      console.log(`Año de publicacion: ${libro.añoPublicacion}`);
    } else {
      console.log('Libro no encontrado!');
    }
    this.menu();
  }

  private modificarLibro(): void {
    let titulo = readline.question('Ingrese el titulo del libro a modificar: ');
    let libro = this.libros.find((libro) => libro.titulo === titulo);
    if (libro) {
      libro.titulo = readline.question('Ingrese el nuevo titulo del libro: ');
      libro.autor = readline.question('Ingrese el nuevo autor del libro: ');
      libro.genero = readline.question('Ingrese el nuevo genero del libro: ');
      libro.añoPublicacion = parseInt(readline.question('Ingrese el nuevo año de publicacion del libro: '));
      console.log('Libro modificado con exito!');
    } else {
      console.log('Libro no encontrado!');
    }
    this.menu();
  }

  private eliminarLibro(): void {
    let titulo = readline.question('Ingrese el titulo del libro a eliminar: ');
    let libro = this.libros.find((libro) => libro.titulo === titulo);
    if (libro) {
      this.libros = this.libros.filter((libroActual) => libroActual !== libro);
      console.log('Libro eliminado con exito!');
    } else {
      console.log('Libro no encontrado!');
    }
    this.menu();
  }

  private verListaLibros(): void {            //Para ver la lista completa de los libros que hay registrados
    if (this.libros.length === 0) {
      console.log('No hay libros cargados!');  
    } else {
      console.log('Lista de libros:');
      this.libros.forEach((libro, indice) => {
        console.log(`Libro ${indice + 1}:`);
        console.log(`Titulo: ${libro.titulo}`);
        console.log(`Autor: ${libro.autor}`);
        console.log(`Genero: ${libro.genero}`);
        console.log(`Año de publicacion: ${libro.añoPublicacion}`);
        console.log('-------------------');
      });
    }
    this.menu();
  }
}