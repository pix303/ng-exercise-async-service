import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeAll, takeLast, toArray } from 'rxjs/operators';
import { Post } from 'src/app/interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  async getPosts(): Promise<Post[]> {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts").pipe(
      //mergeAll(),
      //takeLast(50),
      //toArray()
    ).toPromise();
  }
}

