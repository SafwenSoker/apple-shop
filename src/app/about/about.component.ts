import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  public changeText(){
  }
  public users = [
    {
      name: 'Safwen Soker',
      age: 32,
      group: "DSI33",
      email: 'safwensoker@gmail.com',
      phone: '+33 6 12 34 56 78',
      activeStyle: {
        color: 'red',
        fontWeight: 'bold'
      }
    },
    {
      name: 'Jane Doe',
      age: 29,
      group: "DSI32",
      email: 'jane.doe.gmail.com',
      phone: '+33 6 43 34 78 90',
      activeStyle : {
        color: 'blue',
        fontStyle: 'italic'
      }
    },
  ];

  private color: any;
  public showButton = true;
  public choice = "SEM";
  public today = new Date();
  constructor() { }

  ngOnInit(): void {
  }
  public switchStyle(){
    this.color = this.users[0].activeStyle.color;
    this.users[0].activeStyle.color = this.users[1].activeStyle.color;
    this.users[1].activeStyle.color = this.color;
  }
}
