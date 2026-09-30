import { Component,OnInit } from '@angular/core';
import { UsbreaderApi } from '../services/usbreader-api';

@Component({
  imports: [],
  selector: 'app-controller-devices',
  styleUrl: './controller-devices.css',
  templateUrl: './controller-devices.html',
})
export class ControllerDevices implements OnInit{

  devices: any[] = [];

  constructor(private usbService: UsbreaderApi){}

  ngOnInit(): void {
    this.usbService.getDevices().subscribe(data =>{
      this.devices = data;
    });
  }

}
