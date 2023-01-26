import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface ICommentList {
  idx: Number;
  writer: String;
  date: String;
  content: String;
  commentPasswd: String;
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
    commentPasswd: String;
  }[] | undefined;

  boardId: any
  comment_insert_url: string

  //삭제하기 버튼
  commentPasswd : any;
  delete_url : string

  deleteAlert() {
    this.delete_url = 'http://localhost:5000/comment_delete/' + this.boardId
    alert('삭제되었습니다.')
    // var delete_alert = confirm('정말 삭제하시겠습니까?')
    // if(delete_alert == true) {
    //   var passwd = prompt('게시물의 비밀번호를 입력하세요')
    //   if(passwd == this.commentPasswd){
    //   }else{
    //     alert('비밀번호가 일치하지 않습니다.')
    //   }
    // }
  }

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
          commentPasswd: data[i].comment_pwd,
        });
      }
    });
    this.commentList = commentList;
  }

  ngOnDestroy() {
    commentList = [];
  }
}
