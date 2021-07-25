import { Component, OnInit } from '@angular/core';
import { Blog } from '../../Blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((blogs) => (this.blogs = blogs));
  }

  deleteBlog(blog: Blog) {
    this.blogService
      .deleteBlog(blog)
      .subscribe((res) =>
        this.blogService.getBlogs().subscribe((blogs) => (this.blogs = blogs))
      );
  }

  addBlog(blog: Blog) {
    this.blogService
      .addBlog(blog)
      .subscribe((blog) =>
        this.blogService.getBlogs().subscribe((blogs) => (this.blogs = blogs))
      );
  }
}
