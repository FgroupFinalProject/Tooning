import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface ICommentList {
  idx: Number;
  writer: String;
  date: String;
  content: String;
  passwd: String;
}

let commentList: ICommentList[];
commentList = [];

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  commentList: {
    idx: Number;
    writer: String;
    date: String;
    content: String;
    passwd: String;
  }[] | undefined;

  boardId: any
  comment_insert_url: string

  ngOnInit() {
    this.boardId = this.route.snapshot.paramMap.get('item')
    this.comment_insert_url = "http://localhost:5000/comment_insert/" + this.boardId
    console.log(this.boardId)
    console.log(this.comment_insert_url)

    this.http.get<any>('http://localhost:5000/comment_list/' + this.boardId).subscribe(data => {
      console.log(data)

      for (let i = 0; i < data.length; i++) {
        commentList.push({
          idx: data[i].comment_id,
          writer: data[i].comment_nickname,
          date: data[i].comment_date,
          content: data[i].comment_content,
          passwd: data[i].comment_pwd,
        });
      }
    });
    this.commentList = commentList;
  }

  ngOnDestroy() {
    commentList = [];
  }
}
