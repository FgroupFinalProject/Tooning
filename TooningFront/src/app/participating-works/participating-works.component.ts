import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface IBoardList {
  idx: Number;
  img: String;
  title: String;
  writer: String;
  date: String;
  like: String;
  looks: String;
  rt_id: Number;
}

let boardList: IBoardList[];
boardList = [];

interface ITempletsList {
  idx: Number;
  img: String;
  title: String;
}

let templetsList: ITempletsList[];
templetsList = [];

@Component({
  selector: 'app-participating-works',
  templateUrl: './participating-works.component.html',
  styleUrls: ['./participating-works.component.css'],
})
export class ParticipatingWorksComponent {
  constructor(
    private route: ActivatedRoute,
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
    rt_id: any;
  }[] | undefined;

  templetsList: {
    idx: Number;
    img: String;
    title: String;
  }[] | undefined;

  boardId: any
  like_url: any
  work_id_url: any
  selectId: any

  goToParticipantDetail(item: IBoardList) {
    //console.log(item.idx)
    this.router.navigate(['/relay-participant-detail-page', { item: item.idx }])
  }

  ngOnInit() {
    this.http.get<any>('http://localhost:5000/board_list').subscribe(data => {
      //console.log(data)

      for (let i = 0; i < data.length; i++) {
        boardList.push({
          idx: data[i].rp_id,
          img: data[i].rp_img,
          title: data[i].rp_title,
          writer: data[i].rp_part_id,
          date: data[i].rp_date,
          like: data[i].rp_like,
          looks: data[i].rp_looks,
          rt_id: data[i].relay_toon_rt_id
        });
      }
    });
    this.boardList = boardList;
    this.http.get<any>('http://localhost:5000/templets').subscribe(data => {
      //console.log(data)

      for (let i = 0; i < data.length; i++) {
        templetsList.push({
          idx: data[i].rt_id,
          img: data[i].src,
          title: data[i].rt_title,
        });
      }
    });
    this.templetsList = templetsList;

    this.work_id_url = 'http://localhost:5000/board_respect_list'
    
    this.selectId = this.route.snapshot.paramMap.get('templets')
    console.log(this.selectId)
    this.http.get<any>('http://localhost:5000/board_respect_list' + this.selectId).subscribe(data => {
      console.log(data)

      for (let i = 0; i < data.length; i++) {
        boardList.push({
          idx: data[i].rp_id,
          img: data[i].rp_img,
          title: data[i].rp_title,
          writer: data[i].rp_part_id,
          date: data[i].rp_date,
          like: data[i].rp_like,
          looks: data[i].rp_looks,
          rt_id: data[i].relay_toon_rt_id
        });
      }
    });
  }

  row() {
    if (boardList.length % 3 == 0) {
      return true;
    }
    return false;
  }

  ngOnDestroy() {
    boardList = [];
    templetsList = [];
    console.log("participating-works page end")
  }
}
