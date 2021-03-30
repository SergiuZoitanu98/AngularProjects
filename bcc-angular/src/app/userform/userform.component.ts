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
  newDate: Date;
  client: {
    confermato;
  };
  message: string;
  errore: boolean;
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
      dataNascita: null,
    };
    this.filiali = {
      id: "",
      nome: "",
    };
  }
  findClients() {
    this.newDate = new Date(this.clienti.dataNascita);
    this.clienti.dataNascita =
      this.newDate.getFullYear() +
      "/" +
      (this.newDate.getMonth() + 1) +
      "/" +
      this.newDate.getDate();

    const params = new HttpParams()
      .set("nag", this.clienti.nag)
      .set("branch", this.filiali.id)
      .set("customerName", this.clienti.nome);
    // .set("birthDate", this.clienti.dataNascita);

    this.clientService.cerca(params).subscribe((res) => {
      let array = [];
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          array.push(res[key]);
        }
      }
      for (let i in array) {
        let date2 = new Date(array[i].dataNascita);
        array[i].dataNascita = date2.toLocaleDateString();
      }
      if (typeof array !== "undefined" && array.length > 0) {
        this.errore = false;
        this.clients = array;
      } else {
        this.errore = true;
        this.message = "Non esiste alcuna corrispondenza con i dati inseriti.";
      }
    });

    console.log(typeof this.clienti.dataNascita);
  }
}
