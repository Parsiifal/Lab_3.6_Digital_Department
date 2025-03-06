import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from '../json-reader.service';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})

export class Page3Component implements OnInit 
{
  jsonData: any;
  error: string = "";

  constructor(private jsonReaderService: JsonReaderService) {}

  ngOnInit(): void 
  {
    //this.jsonReaderService.makeRequest().subscribe(() => {
      this.loadData();
    //});
  }

  loadData(): void 
  {
    this.jsonReaderService.getDataFromJsonFile().pipe(
      tap(data => 
      {
        console.log('Received data:', data);
      }),
      catchError(error =>
      {
        console.error('Error fetching data:', error);
        this.error = 'Failed to fetch data';
        return [];
      })
    ).subscribe(data => 
    {
      this.jsonData = data;
    });

  }

}