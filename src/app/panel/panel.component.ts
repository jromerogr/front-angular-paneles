import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Panel } from '../models';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit{
  panel : Panel; 

  paneles : Array<Panel> = [
    {"id":"1","name":"RomeXZ","description":"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló  de un panel","banner": "https://previews.123rf.com/images/delstudio/delstudio2305/delstudio230500931/204020716-ai-generativo-plantilla-de-banner-de-espacio-psicod%C3%A9lico-en-estilo-de-arte-de-l%C3%ADnea-manga-anime.jpg"},
    {"id":"2","name":"Natsu","description":"Fuego de Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló ","banner": "https://previews.123rf.com/images/delstudio/delstudio2305/delstudio230500931/204020716-ai-generativo-plantilla-de-banner-de-espacio-psicod%C3%A9lico-en-estilo-de-arte-de-l%C3%ADnea-manga-anime.jpg"},
    {"id":"3","name":"Lucy","description":"Espiritu de Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló ","banner": "https://previews.123rf.com/images/delstudio/delstudio2305/delstudio230500931/204020716-ai-generativo-plantilla-de-banner-de-espacio-psicod%C3%A9lico-en-estilo-de-arte-de-l%C3%ADnea-manga-anime.jpg"},
    {"id":"4","name":"Erza","description":"Armadura de Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló ","banner": "https://previews.123rf.com/images/delstudio/delstudio2305/delstudio230500931/204020716-ai-generativo-plantilla-de-banner-de-espacio-psicod%C3%A9lico-en-estilo-de-arte-de-l%C3%ADnea-manga-anime.jpg"}
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    const panelId = this.route.snapshot.paramMap.get('panelId')
    this.panel = this.paneles.find(panel=> panel.id === panelId) || {"id":"","name":"","description":"","banner":""}

  }

  
}
