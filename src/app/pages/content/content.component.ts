import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  imports: [RouterModule],
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";
  private id: string | null = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");

      if (this.id) {  // Só chama a função se o ID for válido
        this.setValuesToComponent(this.id);
      }
    });
  }

  setValuesToComponent(id: string): void {
    const result = dataFake.find(article => article.id === id);

    if (result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photoCover;
    }
  }
}
