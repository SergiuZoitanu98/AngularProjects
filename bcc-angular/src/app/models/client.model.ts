export class Client{
  nome:string;
  id:number;
  email:string;
  nag:string;
  numeroTelefono:string;
  privacy1:boolean;
  privacy2:boolean
  privacy3:boolean
  privacy4:boolean
  privacy5:boolean
  privacy6:boolean;
  dataNascita: Date;
  confermato: boolean;
    firma: boolean
    constructor(nome:string,id:number,email:string,nag:string,numeroTelefono:string,p1:boolean,p2:boolean,p3:boolean,p4:boolean,p5:boolean,p6:boolean,dataNascita:Date,firma:boolean,confermato:boolean) {
        this.nome = nome;
        this.id = id;
        this.email = email;
        this.nag = nag;
        this.numeroTelefono = numeroTelefono;
        this.privacy1 = p1;
        this.privacy2 = p2;
        this.privacy3 = p3;
        this.privacy4 = p4;
        this.privacy5 = p5;
        this.privacy6 = p6;
        this.dataNascita = dataNascita;
        this.confermato = confermato;
        this.firma = firma;
    }
}