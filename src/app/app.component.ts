import {Component, OnInit} from '@angular/core';
import { Observable, Observer, Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  protected content: any;

  ngOnInit(): void {

    // Observable envoyant un flux de données
    const observable = new Observable<string>((observer) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });

    // Observeur, qui souscrit au flux de données (et la traite)
    const observer = {
      next: (a: any) => {this.content = a}
    };

    observable.subscribe(observer)
  }

}
