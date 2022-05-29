import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  galeria = true;

  mostrarGaleria(mostrarSiNo:  boolean) {
    this.galeria = mostrarSiNo;
  }

  usuario = {
    "nombre":"duda",
    "alias": "@duda",
    "fotoPerfil": "../assets/imagenes/duda.jpg",
    "seguidores": 500,
    "seguidos": 34,
    "bio": "adiviname esto", 
    "publicaciones" : [ {
      "usuario": "@eldudas",
      "imagen": "../assets/imagenes/dudachikita.png",
      "caption": "toy chikito",
      "comentario": "", 
      "id": "011"
    },
    {
      "usuario": "@eldudas",
      "imagen": "../assets/imagenes/coffe.jpg",
      "caption": "un coffe.",
      "comentario": "", 
      "id": "022"
    },
    {
      "usuario": "@eldudas",
      "imagen": "../assets/imagenes/feli.jpg",
      "caption": "feli :D",
      "comentario": "", 
      "id": "033"
    }
    ]
  }

}
