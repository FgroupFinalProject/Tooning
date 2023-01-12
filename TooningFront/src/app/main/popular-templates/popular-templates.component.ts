import { Component } from '@angular/core';

const templats : string[] = ['assets/img/image1.jpg','assets/img/image2.jpg','assets/img/image3.jpg','assets/img/image4.jpg']

@Component({
  selector: 'app-popular-templates',
  templateUrl: './popular-templates.component.html',
  styleUrls: ['./popular-templates.component.css']
})
export class PopularTemplatesComponent {

list : string[] | undefined;

constructor(){
  this.list = templats;
}

}
