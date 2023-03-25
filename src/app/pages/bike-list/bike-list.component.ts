import { Component } from '@angular/core';
import { bikesData } from 'src/app/core/product.data';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.scss']
})
export class BikeListComponent {
  public bikes= bikesData
}
