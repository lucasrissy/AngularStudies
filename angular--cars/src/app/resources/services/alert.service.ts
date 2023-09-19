import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  //Criando alert service sucess
  public success(title: string, message: string) {
    this.showAlert(title, message, 'success');
  }

  //Criando alert service info
  public info(title: string, message: string) {
    this.showAlert(title, message, 'info');
  }

  //Criando alert service error
  public error(title: string, message: string) {
    this.showAlert(title, message, 'error');
  }

  showAlert(title: string, message: string, icons: SweetAlertIcon):void {
    Swal.fire(title, message, icons);
  }

  
}
