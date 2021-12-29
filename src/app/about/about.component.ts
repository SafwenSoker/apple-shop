import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public user = {
    name : "John",
    age : 32,
    email : "John@email.com",
    activeStyle : {
      color :"red",
      fontWeight : "bold"
    }
  };
  public user2 = {
    name : "Safwen",
    age : 21,
    email : "Safwen@email.com",
    activeStyle : {
      color :"blue",
      fontStyle : "italic"
    }
  };
  
  public today = new Date();
  constructor() { }

  ngOnInit(): void {
  }
  public switchStyle(){
    this.user.activeStyle.color = "blue";
  }
}
