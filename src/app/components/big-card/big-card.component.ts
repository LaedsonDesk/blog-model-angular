import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  photoCover:string= ""
  @Input()
  cardTitle:string= ""
  @Input()
  cardDescription:string= ""
  @Input()
  id:string="0"


}
