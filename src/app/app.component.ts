import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  constructor(private elementRef:ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('sbb-footer').addEventListener('sbb-footer.language_switch', this.changeLanguage.bind(this));
  }

  language = 'de';

  changeLanguage(event) {
    this.language = event.detail.language;
    window.scrollTo(0, 0);
  }

}
