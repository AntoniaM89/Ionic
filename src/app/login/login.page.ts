import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(private router: Router) { }
  usuario = {
    nombre: "",
    contrasena: ""
  };
  mensaje: string = "";

  enviar() {
    if (this.usuario.nombre !== "") {
      let navigationExtras: NavigationExtras = {
        state: { usuario: this.usuario }
      };
      this.router.navigate(['/home'], navigationExtras);
    } else {
      this.mensaje = "Por favor, ingrese un nombre de usuario.";
    }
  }
} 