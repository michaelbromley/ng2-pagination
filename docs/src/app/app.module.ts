import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BasicExampleComponent} from './components/basic-example/basic-example.component';
import {AdvancedExampleComponent} from './components/advanced-example/advanced-example.component';
import {CustomTemplateExampleComponent} from './components/custom-template-example/custom-template-example.component';
import {ServerExampleComponent} from './components/server-example/server-example.component';
import {StringFilterPipe} from './string-filter.pipe';

// import {NgxPaginationModule} from '../../../src/ngx-pagination.module';
import { NgxPaginationModule } from 'ngx-pagination';

import {BasicPageComponent} from './components/basic-example/basic-page.component';
import {AdvancedPageComponent} from './components/advanced-example/advanced-page.component';
import {CustomPageComponent} from './components/custom-template-example/custom-page.component';
import {ServerPageComponent} from './components/server-example/server-page.component';
import {Highlighter} from './providers/highlighter.service';
import {MealsService} from './providers/meals.service';
import {DocumentationPageComponent} from './components/documentation/documentation-page.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

const ConfiguredRouterModule = RouterModule.forRoot([
  { path: '', pathMatch: 'full', component: DocumentationPageComponent },
  { path: 'basic', component: BasicPageComponent },
  { path: 'advanced', component: AdvancedPageComponent },
  { path: 'custom-template', component: CustomPageComponent },
  { path: 'server-paging', component: ServerPageComponent }
], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    DocumentationPageComponent,
    BasicExampleComponent,
    BasicPageComponent,
    AdvancedExampleComponent,
    AdvancedPageComponent,
    CustomTemplateExampleComponent,
    CustomPageComponent,
    ServerExampleComponent,
    ServerPageComponent,
    StringFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ConfiguredRouterModule,
    NgxPaginationModule
  ],
  providers: [
    Highlighter,
    MealsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
