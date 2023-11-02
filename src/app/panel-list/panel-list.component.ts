import { Component, Input, OnChanges} from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.scss']
})
export class PanelListComponent {

  filterForm = this.formBuilder.group({
    filter:  ''
  })
  
  constructor (private formBuilder: FormBuilder){}

  @Input() filter : string | undefined | null;


  panelesOriginal = [
    {"id":"1","name":"RomeXZ","description":"Descripción de un panel"},
    {"id":"2","name":"Natsu","description":"Fuego de descripción"},
    {"id":"3","name":"Lucy","description":"Espiritu de descripción"},
    {"id":"4","name":"Erza","description":"Armadura de descripción"},
  ]

  paneles = [{"id":"1","name":"RomeXZ","description":"Descripción de un panel"},
  {"id":"2","name":"Natsu","description":"Fuego de descripción"},
  {"id":"3","name":"Lucy","description":"Espiritu de descripción"},
  {"id":"4","name":"Erza","description":"Armadura de descripción"}]
  
  updateFilter() :void{
    let filtro = this.filterForm.value.filter ? this.filterForm.value.filter : ''
    console.log(filtro)
    if(filtro.trim() !== ''){
      this.paneles = this.panelesOriginal.filter((panel) => panel.name.toLowerCase().includes(filtro.toLowerCase()))
    }else{
      this.paneles = this.panelesOriginal
    }
    
  }
 
}
