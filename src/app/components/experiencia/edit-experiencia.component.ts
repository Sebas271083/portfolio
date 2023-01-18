// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Experiencia } from 'src/app/model/experiencia';
// import { SExperienciaService } from 'src/app/service/sexperiencia.service';

// @Component({
//   selector: 'app-edit-experiencia',
//   templateUrl: './edit-experiencia.component.html',
//   styleUrls: ['./edit-experiencia.component.css']
// })
// export class EditExperienciaComponent implements OnInit{

//   expLab: Experiencia = null
//   constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  

//   ngOnInit(): void {
//     const id = this.activatedRouter.snapshot.params['id'];
//     console.log("thissss"+this.sExperiencia.update)
//     console.log("Ver"+  this.sExperiencia.detail(id))

//      this.sExperiencia.detail(id).subscribe(
//       data => {
//         this.expLab = data;
//       }, err => {
//         console.log("entra aca")
//         alert("Error al modificar experiencia")
//         this.router.navigate(['']);
//       }
//      )
//   }
//   onUpdate(): void{
//     const id = this.activatedRouter.snapshot.params['id'];
//     this.sExperiencia.update(id, this.expLab).subscribe(
//       data=>{
//         this.router.navigate(['']);
//       }, err => {
//         alert("Error al modificar experiencia")
//         this.router.navigate(['']);
//       }
//     )
//   } 
// }



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/sexperiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;
  id: number;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = +this.activatedRouter.snapshot.params['id'];
    this.getExperiencia();
  }

  getExperiencia(): void {
    this.sExperiencia.detail(this.id).subscribe(
      data => {
        this.expLab = data;
      }, 
      err => this.handleError()
    );
  }

  onUpdate(): void {
    this.sExperiencia.update(this.id, this.expLab).subscribe(
      data => this.router.navigate(['']), 
      err => this.handleError()
    );
  }

  handleError(): void {
    alert("Error al modificar experiencia");
    this.router.navigate(['']);
  }
}
