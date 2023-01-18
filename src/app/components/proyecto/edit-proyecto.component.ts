import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectosComponent implements OnInit {
  proyec: Proyectos = null;
  id: number;

  constructor(private sProyectos: ProyectosService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = +this.activatedRouter.snapshot.params['id'];
    this.getProyectos();
  }

  getProyectos(): void {
    this.sProyectos.detail(this.id).subscribe(
      data => {
        this.proyec = data;
      }, 
      err => this.handleError()
    );
  }

  onUpdate(): void {
    this.sProyectos.update(this.id, this.proyec).subscribe(
      data => this.router.navigate(['']), 
      err => this.handleError()
    );
  }

  handleError(): void {
    alert("Error al modificar Proyecto");
    this.router.navigate(['']);
  }
}