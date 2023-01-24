import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relay-participant-detail-page',
  templateUrl: './relay-participant-detail-page.component.html',
  styleUrls: ['./relay-participant-detail-page.component.css']
})
export class RelayParticipantDetailPageComponent {
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:5000/board_list').subscribe(data => {
      // this.postId = data;
      console.log(data)
    });
  }

  ngOnDestroy() {
    console.log("participating-works page end")
  }
}
