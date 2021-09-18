import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.class';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  @Input() post: Post = new Post("", "");

  constructor() {
  }

  ngOnInit(): void {
  }

}
