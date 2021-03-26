import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "modal-confirmed",
  templateUrl: "./modal-confirmed.component.html",
  styleUrls: ["./modal-confirmed.component.css"],
})
export class ModalConfirmedComponent implements OnInit {
  @Input() nome: string;
  @Input() codice: string;

  constructor() {}

  ngOnInit() {}
}
