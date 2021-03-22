import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RicercaClientiService } from '../_services/ricerca-clienti.service';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: 'ricerca-clienti',
  templateUrl: './ricerca-clienti.component.html',
  styleUrls: ['./ricerca-clienti.component.css']
})
export class RicercaClientiComponent implements OnInit {
  url = environment.baseUrl;
  constructor(private clientService:RicercaClientiService , private router: Router,
    private route: ActivatedRoute, private http:HttpClient) { }
  clients:{
    branch;
    nag;
    nome;
    dataNascita;
  }
 
  

  ngOnInit() {
    this.clients ={
      branch:"",
      nag:"",
      nome:"",
      dataNascita:""
    }
  }
  findClients() {
    const params = new HttpParams().set('nag', this.clients.nag).set('branch', this.clients.branch);
    this.clientService.cerca(params);
  }
  }


