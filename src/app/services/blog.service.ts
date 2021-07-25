import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Blog } from '../Blog';
import { Blogs } from '../mock-blogs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'http://localhost:3000/blog/';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiUrl}fetchBlog`);
  }

  getaBlog(id): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({ uuid: id });
    console.log(body);
    return this.http.post(`${this.apiUrl}fetchaBlog`, body, {
      headers: headers,
    });
  }

  deleteBlog(blog: Blog): Observable<any> {
    console.log(blog);
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({ uuid: blog.id });
    console.log(body);
    return this.http.post(`${this.apiUrl}delete`, body, { headers: headers });
  }

  addBlog(blog: Blog): Observable<any> {
    console.log(blog);
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(blog);
    console.log(body);
    return this.http.post(`${this.apiUrl}addBlog`, body, { headers: headers });
  }

  editBlog(blog: Blog): Observable<any> {
    console.log(blog);
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(blog);
    console.log(body);
    return this.http.post(`${this.apiUrl}editBlog`, body, { headers: headers });
  }
}
