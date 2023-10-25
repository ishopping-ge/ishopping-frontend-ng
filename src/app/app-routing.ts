import {Routes} from '@angular/router';
import {HomeComponent} from './views/main/home/pages/home.component';

export const appRouting: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {
        path: 'posts',
        loadComponent: () => import('./views/main/posts/pages/posts.component').then(m => m.PostsComponent)
    },
    { path: '**', redirectTo: 'home' }
];
