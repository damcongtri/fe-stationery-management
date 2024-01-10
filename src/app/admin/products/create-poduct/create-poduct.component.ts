import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
    selector: 'app-create-poduct',
    templateUrl: './create-poduct.component.html',
    styleUrls: ['./create-poduct.component.scss']
})
export class CreatePoductComponent {
    public Editor = ClassicEditor;

}
