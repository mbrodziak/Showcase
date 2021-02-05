import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Showcase';

  @HostListener('window:scroll', ['$event'])
    handleScroll(event: Event): any {
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.querySelector('.navbar').classList.add('navbar-dark');
        document.querySelector('.navbar').classList.add('bg-dark');
      }
      else {
        document.querySelector('.navbar').classList.remove('navbar-dark');
        document.querySelector('.navbar').classList.remove('bg-dark');
      }
    }
}
