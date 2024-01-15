import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-create-stationeries',
  templateUrl: './create-stationeries.component.html',
  styleUrls: ['./create-stationeries.component.scss']
})
export class CreateStationeriesComponent {
  public Editor = ClassicEditor;

}
