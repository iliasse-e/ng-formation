import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'title';
  lienImage: any = "../assets/image.jpg";
  inputType: any = "date";
  color: any = "red";
  content: string = "";

  public calculer(a: number, b: number): number {
    return a*b;
  }
  public changeColor(color: string, $event: Event): void {
    this.color = color;
    console.log("information sur l'event : " + $event);
  }
}
