import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-participating',
  templateUrl: './participating.component.html',
  styleUrls: ['./participating.component.css']
})
export class ParticipatingComponent {

  //이미지 업로드 위한 백서버
  url = "http://localhost:5000/upload_images";

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  img: string;
  postId : any; 
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
      this.img = d;
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

  ngOnInit() {
    this.http.get<any>('http://localhost:5000/filepage').subscribe(data => {
      this.postId = data;
      console.log(data)
    })
  }
}
