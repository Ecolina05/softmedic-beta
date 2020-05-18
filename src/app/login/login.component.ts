import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hidePassword: boolean;

  constructor(private router: Router) {
    this.hidePassword = true;
  }

  ngOnInit(): void {
  }

  /**
   * Funtion to sign in 
   */
  login() {
    this.router.navigate(['/splash']);
  }

  /**
   * Funtion to restore password
   */
  restorePass(): void {
    Swal.fire({
      title: 'Recuperar contraseña',
      html: 'Ingrese su usario para continuar',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Recuperar',
      showLoaderOnConfirm: true,
      preConfirm: (user: any) => {
        return fetch(`//api.github.com/users/${user}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Algo ha salido mal: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((res: any) => {
      if (res.value) {
        Swal.fire({
          title: 'Proceso finalizado',
          imageUrl: res.value.avatar_url,
          html: 'Contraseña recuperada',
        });
      }
    });
  }
}
