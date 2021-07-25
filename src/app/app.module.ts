import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';

const appRoutes: Routes = [
  { path: '', component: BlogsComponent },
  { path: 'edit', component: EditBlogComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    AboutComponent,
    FooterComponent,
    BlogsComponent,
    BlogItemComponent,
    AddBlogComponent,
    EditBlogComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
