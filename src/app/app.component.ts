import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piano';

  buttonsList: any[] = [
    {bgColor: 'red', soundUrl: '../assets/sounds/1.mp3'},
    {bgColor: 'orange', soundUrl: '../assets/sounds/2.mp3'},
    {bgColor: 'yellow', soundUrl: '../assets/sounds/3.mp3'},
    {bgColor: 'green', soundUrl: '../assets/sounds/4.mp3'},
    {bgColor: 'teal', soundUrl: '../assets/sounds/5.mp3'},
    {bgColor: 'blue', soundUrl: '../assets/sounds/6.mp3'},
    {bgColor: 'black', soundUrl: '../assets/sounds/7.mp3'},

  ];


  playSound(url: string): void{
    const audio = new Audio();
    audio.src = url;
    audio.load();
    audio.play();
  }
}
