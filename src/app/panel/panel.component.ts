import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Panel } from '../models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent{
  panel : Panel; 
  loading : boolean = true;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  getPanel(panelId: string){
    this.http.get<Panel>('http://localhost:3001/paneles/'+panelId).subscribe((data)=>{
      this.panel = data;
      this.loading = false
    })
  }

  ngOnInit(){
    const panelId = this.route.snapshot.paramMap.get('panelId')
    if(panelId !== null){
      this.getPanel(panelId)
    }

  }

  
}
