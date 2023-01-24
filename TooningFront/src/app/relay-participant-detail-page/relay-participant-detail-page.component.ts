import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-relay-participant-detail-page',
  templateUrl: './relay-participant-detail-page.component.html',
  styleUrls: ['./relay-participant-detail-page.component.css']
})
export class RelayParticipantDetailPageComponent {
  postId: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  boardId : any

  ngOnInit() {
    this.boardId = this.route.snapshot.paramMap.get('item')
    console.log(this.boardId)
    this.http.get<any>('http://localhost:5000/board_detail/' + this.boardId).subscribe(data => {
      // this.postId = data;
      console.log(data)
    });
  }

  ngOnDestroy() {
    console.log("participating-works page end")
  }
}
