import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    userModel = new User("", "", "", "")

  onSubmit(){
    console.log(this.userModel)
  
  }

}
