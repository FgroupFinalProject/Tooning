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

  //수정하기 버튼
  goToParticipatingModify() {
    this.boardId = this.route.snapshot.paramMap.get('item')
    this.router.navigate(['/participating-modify', {item : this.boardId}])
  }

  //참가작으로 버튼
  goToParticipatingWorks() {
    this.router.navigate(['/participating-works'])
  }

  boardId : any
  title : string
  writer : string
  date : any
  img : any
  content : string

  ngOnInit() {
    this.boardId = this.route.snapshot.paramMap.get('item')
    console.log(this.boardId)
    this.http.get<any>('http://localhost:5000/board_detail/' + this.boardId).subscribe(data => {
      console.log(data[0])
      this.title = data[0].rp_title;
      this.writer = data[0].rp_part_id;
      this.date = data[0].rp_date;
      this.img = data[0].rp_img;
      this.content = data[0].rp_content;
    });
  }

  ngOnDestroy() {
    console.log("participating-works page end")
  }
}
