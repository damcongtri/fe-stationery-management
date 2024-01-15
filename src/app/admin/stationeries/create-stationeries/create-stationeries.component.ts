import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { StationeriesService } from 'src/app/service/stationeries.service';

@Component({
  selector: 'app-create-stationeries',
  templateUrl: './create-stationeries.component.html',
  styleUrls: ['./create-stationeries.component.scss']
})
export class CreateStationeriesComponent implements OnInit{
  public Editor = ClassicEditor;


  formData =  new FormGroup({
    categoryName: new FormControl('', [Validators.required]),
  })

  constructor(private categoryService: StationeriesService, private router: Router) {}

  ngOnInit(): void {
  }

  get f():any{
    return this.formData.controls;
  }

  onSubmit(){
    console.log(this.formData.value);
      this.categoryService.insertStationeries(this.formData.value).subscribe((data)=>{
        console.log(data);  
        this.router.navigate(['/list/stationeries']);
      })
  }

}
