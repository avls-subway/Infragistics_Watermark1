import { Component } from '@angular/core';
import { ARTISTS, Artist } from './data';
import { IgxHierarchicalGridComponent, IgxColumnComponent, IgxRowIslandComponent } from 'igniteui-angular';

@Component({
  selector: 'app-grid_test',
  templateUrl: './grid_test.component.html',
  styleUrls: ['./grid_test.component.scss'],
  standalone: true,
  imports: [IgxHierarchicalGridComponent, IgxColumnComponent, IgxRowIslandComponent]
})
export class Grid_testComponent {
  public localData: Artist[] = ARTISTS;
}
