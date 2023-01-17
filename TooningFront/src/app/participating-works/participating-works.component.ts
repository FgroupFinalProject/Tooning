import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, subscribeOn, Subscriber } from 'rxjs';

@Component({
  selector: 'app-participating-works',
  templateUrl: './participating-works.component.html',
  styleUrls: ['./participating-works.component.css'],
})
export class ParticipatingWorksComponent {

   constructor(
    private router: Router,
    private http: HttpClient
  ) { }
  myImage!: Observable<any>;

  base64code!: any;
  
  onChange = ($event: Event) =>  {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);

    this.convertToBase64(file);
  };

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });

    observable.subscribe((d) => {
      console.log(d);
      this.myImage = d;
      this.base64code = d;
    });
  }
  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();

    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);

      subscriber.complete();
    };
    filereader.onerror = () => {
      subscriber.error();
      subscriber.complete();
    };
  }
}
