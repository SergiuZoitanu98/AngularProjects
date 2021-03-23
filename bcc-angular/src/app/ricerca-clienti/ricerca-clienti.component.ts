import { Component, OnInit } from '@angular/core';
import { RicercaClientiService } from '../_services/ricerca-clienti.service';
import {  HttpParams } from "@angular/common/http";
import { AuthService } from "../_services/auth.service";
@Component({
  selector: 'ricerca-clienti',
  templateUrl: './ricerca-clienti.component.html',
  styleUrls: ['./ricerca-clienti.component.css']
})
export class RicercaClientiComponent implements OnInit {
  nome;
  id;
  email;
  nag;
  numeroTelefono;
  privacy1;
  privacy2
  privacy3
  privacy4
  privacy5
  privacy6;
  dataNascita;
  confermato;


  branches : {};
  clients:{}
  clienti:{
    nag;
    nome;
    dataNascita;
  }
  filiali: {
    id;
    nome;
}
  constructor(private clientService: RicercaClientiService, private authService: AuthService) { }
   
  logout() {
      this.authService.logout()
  }
  
  ngOnInit() {
    this.clienti = {
      nag: "",
      nome: "",
      dataNascita: ""
    }
    this.filiali = {
      id: "",
      nome:""
    }
   
      this.clientService.getFiliali().subscribe((res) => {
        let array = [];
        for (let key in res) {
          if (res.hasOwnProperty(key)) {
            array.push(res[key]);
          }
        }
        this.branches = array;
        console.log("Array=", array);
      });
    }
  
  checkClient(c){
    let array = [];
    for (let key in c) {
      if (c.hasOwnProperty(key)) {
        array.push(c[key]);
      }
    }
    this.id = c.id;
    this.nome = c.nome;
    this.email = c.email;
    this.numeroTelefono = c.telefono;
    this.nag = c.nag;
    this.dataNascita = c.dataNascita;
    this.privacy1 = c.p1;
    this.privacy2 = c.p2;
    this.privacy3 = c.p3;
    this.privacy4 = c.p4;
    this.privacy5 = c.p5;
    this.privacy6 = c.p6;
    this.confermato = c.confermato;
    if (c.confermato == false) {
      this.confermato = true;
    }
   }
  

  findClients() {
    const params = new HttpParams().set('nag', this.clienti.nag).set('branch', this.filiali.id).set('nome',this.clienti.nome);
    this.clientService.cerca(params).subscribe((res) => {
      let array = [];
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          array.push(res[key]);
        }
      }
      this.clients = array;
      console.log("Array=", array);
    });
  }
  
  conferma() {
    this.clientService.conferma(this.confermato,this.id)
  }

  }


