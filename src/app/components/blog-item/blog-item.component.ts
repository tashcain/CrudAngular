import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from '../../Blog';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css'],
})
export class BlogItemComponent implements OnInit {
  @Input() blog: Blog;
  faTimes = faTimes;
  faEdit = faEdit;
  @Output() onDeleteBlog: EventEmitter<Blog> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onDelete(blog) {
    this.onDeleteBlog.emit(blog);
  }

  onEdit(blog) {
    this.router.navigate(['/edit'], { queryParams: { id: blog.id } });
  }
}
