import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private showAddBlog: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  toggleAddBlog(): void {
    this.showAddBlog = !this.showAddBlog;
    this.subject.next(this.showAddBlog);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
