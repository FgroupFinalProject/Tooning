import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-participating',
  templateUrl: './participating.component.html',
  styleUrls: ['./participating.component.css']
})
export class ParticipatingComponent {

  //postId: any;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    // Simple POST request with a JSON body and response type <any>
    this.http.post<any>('http://localhost:5000/upload_images', { title: 'Angular POST Request Example' }).subscribe(data => {
      //this.postId = data.id;
    })
  }
}
