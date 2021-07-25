import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Blog } from '../../Blog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  title: string;
  author: string;
  content: string;
  showAddBlog: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddBlog = value));
  }
  @Output() onAddBlog: EventEmitter<Blog> = new EventEmitter();

  ngOnInit(): void {}

  onSubmit() {
    if (!this.title) {
      alert('Please add a blog Title');
      return;
    }

    const newBlog = {
      title: this.title,
      auther: this.author,
      content: this.content,
    };

    this.onAddBlog.emit(newBlog);

    this.title = '';
    this.author = '';
    this.content = '';
  }
}
