import { Component, OnInit } from '@angular/core';
import { Dicas } from 'src/app/models/dicas';
import { DicasService } from '../services/dicas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dicasService: DicasService) { }

  listaDicas = [] as Dicas[]

  ngOnInit(): void {
    this.carregarDicas()
  }

  carregarDicas() {
    this.dicasService.getDicas().subscribe( (DicasRecebidas: Dicas[]) => {
      this.listaDicas = DicasRecebidas;
      console.log(this.listaDicas);
    } )
  }

}
