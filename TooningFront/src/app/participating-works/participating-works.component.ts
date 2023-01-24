import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface IBoardList {
  idx: Number;
  img: String;
  title: String;
  writer: String;
  date: String;
  like: String;
  looks: String;
}

let boardList: IBoardList[];
boardList = [];

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

  boardList: {
    idx: any;
    img: any;
    title: any;
    writer: any;
    date: any;
    like: any;
    looks: any;
  }[] | undefined;

  goToParticipantDetail() {
    this.router.navigate(['/relay-participant-detail-page'])
  }

  ngOnInit() {
    this.http.get<any>('http://localhost:5000/board_list').subscribe(data => {
      // this.postId = data;
      console.log(data)
      for(let i = 0; i< data.length; i++) {
        boardList.push({
          idx: data[i].rp_id,
          img: data[i].rp_img,
          title: data[i].rp_title,
          writer: data[i].rp_part_id,
          date: data[i].rp_date,
          like: data[i].rp_like,
          looks: data[i].rp_looks
        });
      }
    });
    this.boardList = boardList;
  }

  ngOnDestroy() {
    boardList = [];
    console.log("participating-works page end")
  }
}
