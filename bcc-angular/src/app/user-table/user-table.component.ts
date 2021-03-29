import { Component, Inject, Input, OnInit } from "@angular/core";
import { RicercaClientiService } from "../_services/ricerca-clienti.service";
@Component({
  selector: "usertable",
  templateUrl: "./user-table.component.html",
  styleUrls: ["./user-table.component.css"],
})
export class UserTableComponent implements OnInit {
  constructor(private clientService: RicercaClientiService) {}
  @Input() clients: {};
  p: number = 1;
  array: [];
  nome;
  id;
  email;
  nag;
  numeroTelefono;
  privacy1;
  privacy2;
  privacy3;
  privacy4;
  privacy5;
  privacy6;
  dataNascita;
  confermato;
  firma;
  codice;

  ngOnInit() {}

  checkClient(c) {
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
    this.firma = c.firma;
    this.codice = c.codice;
    this.confermato = c.confermato;
  }

  conferma() {
    this.clientService
      .conferma(
        this.id,
        this.email,
        this.numeroTelefono,
        this.privacy1,
        this.privacy2,
        this.privacy3,
        this.privacy4,
        this.privacy5,
        this.privacy6,
        this.firma
      )

      .subscribe((res) => {});
  }
}
