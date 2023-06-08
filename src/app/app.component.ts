import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiendaonlinedeportiva';
  isMenuOpen: boolean = false;

  toggleMenu(event: any) {
    this.isMenuOpen = event.target.checked;
  }
}
