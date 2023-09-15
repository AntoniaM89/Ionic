import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
}) 
export class HomePage implements OnInit {

  constructor(private router: Router, private activateRouter: ActivatedRoute) {}
  public usuario ={
    nombre:"",
    contrasena:""
  }
  ngOnInit(){
    this.activateRouter.queryParams.subscribe(()=>{
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state){
        this.usuario.nombre=state['usuario'].nombre;
        this.usuario.contrasena = state['usuario'].contrasena;
        console.log(this.usuario)
      }
    })
  }
}
