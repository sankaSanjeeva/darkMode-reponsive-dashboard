import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: any;

  constructor(private http: HttpClient) {
    http.get('../../../assets/configurations/homeItems.json').subscribe(res => {
      this.items = res;
    });
  }

  ngOnInit(): void { }
}
