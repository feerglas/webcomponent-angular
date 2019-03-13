import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsComponent } from './Components/TimetableResults/results.component';
import { SearchComponent } from './Components/TimetableSearch/search.component';

@NgModule({
	declarations: [
		AppComponent,
		ResultsComponent,
		SearchComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
