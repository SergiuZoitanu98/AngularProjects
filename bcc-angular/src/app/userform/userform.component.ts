import { HttpParams } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { RicercaClientiService } from "../_services/ricerca-clienti.service";
@Component({
  selector: "userform",
  templateUrl: "./userform.component.html",
  styleUrls: ["./userform.component.css"],
})
export class UserformComponent implements OnInit {
  constructor(private clientService: RicercaClientiService) {}

  branches: {};
  clients;
  clienti: {
    nag;
    nome;
    dataNascita;
  };
  filiali: {
    id;
    nome;
  };
  ngOnInit() {
    this.clientService.getFiliali().subscribe((res) => {
      let array = [];
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          array.push(res[key]);
        }
      }
      this.branches = array;
    });
    this.clienti = {
      nag: "",
      nome: "",
      dataNascita: "",
    };
    this.filiali = {
      id: "",
      nome: "",
    };
  }
  findClients() {
    const params = new HttpParams()
      .set("nag", this.clienti.nag)
      .set("branch", this.filiali.id)
      .set("nome", this.clienti.nome);
    this.clientService.cerca(params).subscribe((res) => {
      let array = [];
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          array.push(res[key]);
        }
      }
      this.clients = array;
    });
  }
}
