import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {RouterModule} from "@angular/router";

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
        <h1>Home Works</h1>
        <button mat-raised-button color="primary" routerLink="/posts">see ssr Posts</button>
    `,

    encapsulation: ViewEncapsulation.None,
    imports: [MatButtonModule, RouterModule],
})
export class HomeComponent {}
