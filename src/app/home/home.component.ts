import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Object;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(dataReturned => {
      this.users = dataReturned;
      console.log(this.users);
      
    })
  }

}
