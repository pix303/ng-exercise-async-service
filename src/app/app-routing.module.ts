import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostListComponent } from './posts/post-list/post-list.component';

const routes: Routes = [
  { path: "posts", component: PostListComponent },
  { path: "posts/:id", component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
