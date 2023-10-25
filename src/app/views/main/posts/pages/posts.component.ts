import {Component, inject, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsSsrService} from '@services/api/ishopping/posts-ssr/posts-ssr.service';

@Component({
    selector: 'app-posts',
    standalone: true,
    template: `
        <ng-container *ngIf="(apiData$ | async) as apiData; else loading">
            <h2>API Data</h2>
            <ul *ngFor="let post of apiData">
                <h3>{{ post.title }}</h3>
                <p>{{ post.body }}</p>
            </ul>
        </ng-container>

        <ng-template #loading>
            <p>loading</p>
        </ng-template>
    `,
    imports: [CommonModule],
    encapsulation: ViewEncapsulation.None,
})
export class PostsComponent {
    #postsSsrService = inject(PostsSsrService);
    apiData$ = this.#postsSsrService.fetchDataFromApi();
}
