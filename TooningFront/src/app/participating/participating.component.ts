import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

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

  selectFile(e: any) {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = async (event: any) => {
        // base64 image
        this.img = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
