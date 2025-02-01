import { Component } from '@angular/core';
import { OverCaursoleComponent } from "../over-caursole/over-caursole.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [OverCaursoleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
