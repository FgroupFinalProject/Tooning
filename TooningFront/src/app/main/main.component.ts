import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  postId : any;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  participatingWorks() {
    this.router.navigate(['/participating-works'])
  }

  participating() {
    this.router.navigate(['/participating'])
  }

  ngOnInit() {      
    // Simple GET request with response type <any>
    this.http.get<any>('http://localhost:5000/test').subscribe(data => {
        this.postId = data.templets_img;
    })
}
}
