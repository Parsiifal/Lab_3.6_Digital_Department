import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component 
{
  id: string = "";
  constructor(private route: ActivatedRoute) 
  {
    this.route.paramMap.subscribe(params => 
      {
      const id = params.get('id');
      alert('Parameter: ' + id);
    });
  }

  entities:any[] = [];

  handleFormSubmit(formValue:any) 
  {
    this.entities.push(formValue);
  }
}