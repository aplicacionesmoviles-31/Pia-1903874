import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarPublicacion();
  }

  publicacion = this.ruta.snapshot.params['id'];

  publicaciones = [ {
    "usuario": "@elduda",
    "imagen": "../assets/imagenes/dudachikita.png",
    "caption": "toy chikito",
    "comentario": "", 
    "id": "011"
  },
  {
    "usuario": "@elduda",
    "imagen": "../assets/imagenes/coffe.jpg",
    "caption": "un coffe",
    "comentario": "", 
    "id": "022"
  },
  {
    "usuario": "@elduda",
    "imagen": "../assets/imagenes/feli.jpg",
    "caption": "feli :D ",
    "comentario": "", 
    "id": "033"
  }
  ];

  publicacionDetalle: any= {}

  buscarPublicacion(): any {
    for(let i = 0; i < this.publicaciones.length; i++) {
      if(this.publicaciones[i].id == this.publicacion) {
        this.publicacionDetalle = this.publicaciones[i];
      }
    }
    return this.publicacionDetalle;
  }


}
