import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewSkillComponent } from './components/habilidades/new-skill.component';
import { EditSkillComponent } from './components/habilidades/edit-skill.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto.component';
import { EditProyectosComponent } from './components/proyecto/edit-proyecto.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexp', component:NewExperienciaComponent},
  {path:'editexp/:id', component:EditExperienciaComponent },
  {path:'nuevaeduca', component: NewEducacionComponent},
  {path:'editeduca/:id', component:EditeducacionComponent},
  {path:'newskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path:'nuevopro', component:NewProyectoComponent},
  {path: 'editpro/:id', component: EditProyectosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
