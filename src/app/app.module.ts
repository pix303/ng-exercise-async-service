import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxListModule } from 'devextreme-angular/ui/list';
import { DxBoxModule } from 'devextreme-angular/ui/box';

import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostListComponent } from './posts/post-list/post-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //devExtrem widgets
    DxButtonModule,
    DxListModule,
    DxBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
