import { Component, OnInit } from '@angular/core';
import * as data from '../datos.json';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit(): void {
  }

  //datos: data = {}

  siguiendo = false;

  editandoMensaje= false;
  editandoCorreo = false;

  usuario = {
    "nombre":"duda",
    "alias": "@eldudas",
    "fotoPerfil": "../assets/imagenes/duda.jpg",
    "seguidores": 500,
    "seguidos": 34,
    "bio": "adiviname esto", 
    "publicaciones": [
      "../assets/imagenes/dudachikita.png",
      "../assets/imagenes/duda.jpg",
      "../assets/imagenes/feli.jpg"
    ]
  }

  async createActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Cancelar', 
        role: 'cancel'
      },
      {
        text: 'Bloquear usuario', 
        role: 'destructive'
      }]
    });

    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  seguir(): void {
    this.siguiendo = !this.siguiendo;
  }

  enviarMensaje(): void {
    
  }

  enviarEmail(): void {

  }

  desplegarOpciones(): void {
    //En proceso.
  }


}
