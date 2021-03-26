import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "modal-unconfirmed",
  templateUrl: "./modal-uncofirmed.component.html",
  styleUrls: ["./modal-uncofirmed.component.css"],
})
export class ModalUncofirmedComponent implements OnInit {
  @Input() nag: string;
  @Input() nome: string;
  @Input() dataNascita: Date;
  @Input() telefono: string;
  @Input() email: string;
  @Input() privacy1: boolean;
  @Input() privacy2: boolean;
  @Input() privacy3: boolean;
  @Input() privacy4: boolean;
  @Input() privacy5: boolean;
  @Input() privacy6: boolean;
  @Input() firma: boolean;

  constructor() {}

  ngOnInit() {}
}
