import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit{

  proyec: Proyectos[] = [];

  constructor(private sProyectos: ProyectosService, private tokenService: TokenService ) { }

  isLogged = false
  ngOnInit(): void {
    this.cargarProyecto()
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void{
    this.sProyectos.lista().subscribe(data => this.proyec = data)
    
  }

  delete(id?: number){
    if(id != undefined){
      this.sProyectos.delete(id).subscribe(
        data =>{
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar el Proyecto");
        }
      )
    }
  }

}


