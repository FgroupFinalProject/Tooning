import { Component } from '@angular/core';

interface Itemplates {
  src: string,
  url : string,
}

let templats: Itemplates[] = 
[{ src: 'assets/img/image1.jpg', url: 'https://tooning.io/canvas-share/152069'},
{ src: 'assets/img/image2.jpg', url: 'https://tooning.io/canvas-share/152144'},
{ src: 'assets/img/image3.jpg', url: 'https://tooning.io/canvas-share/1669613'},
{ src: 'assets/img/image4.jpg', url: 'https://tooning.io/canvas-share/1668001'}
];

@Component({
  selector: 'app-popular-templates',
  templateUrl: './popular-templates.component.html',
  styleUrls: ['./popular-templates.component.css']
})
export class PopularTemplatesComponent {

list : Itemplates[] | undefined;

constructor(){
  this.list = templats;
}

}
