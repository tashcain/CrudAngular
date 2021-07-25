import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Blog } from '../../Blog';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css'],
})
export class EditBlogComponent implements OnInit {
  title: string;
  author: string;
  content: string;
  uuid: number;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {}
  @Output() onEditBlog: EventEmitter<Blog> = new EventEmitter();

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.blogService.getaBlog(params.id).subscribe((res) => {
        this.title = res[0].title;
        this.content = res[0].content;
        this.author = res[0].auther;
      });
    });
  }

  onSubmit() {
    if (!this.title) {
      alert('Please add a blog Title');
      return;
    }

    const newBlog = {
      title: this.title,
      auther: this.author,
      content: this.content,
      uuid: 0,
    };

    this.route.queryParams.subscribe((params) => {
      newBlog.uuid = params.id;
    });

    this.blogService
      .editBlog(newBlog)
      .subscribe((blog) => this.router.navigate(['/']));

    this.title = '';
    this.author = '';
    this.content = '';
  }
}
