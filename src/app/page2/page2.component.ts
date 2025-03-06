import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component 
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
