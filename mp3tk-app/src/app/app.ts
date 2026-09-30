import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import { ControllerDevices } from './controller-devices/controller-devices';


@Component({
  imports: [RouterOutlet, HttpClientModule, ControllerDevices],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mp3tk-app');
}
