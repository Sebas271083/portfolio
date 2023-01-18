import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';

import { ProyectosService } from 'src/app/service/proyectos.service';



@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent {
  nombreP: string = '';
  descripcionP: string = ''
  
  constructor(private sProyecto: ProyectosService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const expe = new Proyectos(this.nombreP, this.descripcionP);
    this.sProyecto.save(expe).subscribe(data=>{
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, err => {
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
  }
}
