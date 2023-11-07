import { Component, Input, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PanelList } from '../models';


@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.scss']
})
export class PanelListComponent {

  filterForm = this.formBuilder.group({
    filter:  ''
  })
  
  constructor (private formBuilder: FormBuilder, private http: HttpClient){}

  @Input() filter : string | undefined | null;


  panelesOriginal : PanelList[]
  paneles : PanelList[]
  loading: boolean = true
  
  updateFilter() :void{
    let filtro = this.filterForm.value.filter ? this.filterForm.value.filter : ''
    if(filtro.trim() !== ''){
      this.paneles = this.panelesOriginal.filter((panel) => panel.name.toLowerCase().includes(filtro.toLowerCase()))
    }else{
      this.paneles = this.panelesOriginal
    }
  }

  getPaneles() : void{
    this.http.get<PanelList[]>('http://localhost:3001/paneles')
    .subscribe((data) =>{
      this.paneles = data;
      this.panelesOriginal = this.paneles;
      this.loading = false;
    })
    console.log(this.panelesOriginal)
    console.log(this.paneles)
  }

  ngOnInit(){
    this.getPaneles()
  }
 
}
