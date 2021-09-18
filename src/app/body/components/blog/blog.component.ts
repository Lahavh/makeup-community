import { Component, OnInit } from '@angular/core';
import { Post } from './post.class';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {

  allPosts: Post[] = [{ postTitle: "lala", postBody: "lalaBody", postTimestamp: new Date() },
  { postTitle: "lala2", postBody: "lalaBody2", postTimestamp: new Date() },
  { postTitle: "lala3", postBody: "lalaBody3", postTimestamp: new Date() },
  { postTitle: "lala4", postBody: "lalaBody4", postTimestamp: new Date() },
  { postTitle: "lala5", postBody: "lalaBody5", postTimestamp: new Date() },
  { postTitle: "lala6", postBody: "lalaBody6", postTimestamp: new Date() }
  ]

    ;
  constructor() { }

  ngOnInit(): void {
  }

}
