import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  newPost: string = "No Content!";

  constructor() {}

  ngOnInit() {}

  onCreatePost(){
    this.newPost = "Ava!";
  }
}
