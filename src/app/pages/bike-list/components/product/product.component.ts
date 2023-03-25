import { Component, Input } from '@angular/core';
import { BikeI } from 'src/app/core/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() public bikes?: BikeI;

}
