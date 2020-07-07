import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laygiatri',
  templateUrl: './laygiatri.component.html',
  styleUrls: ['./laygiatri.component.css']
})
export class LaygiatriComponent implements OnInit {

  laygt(a){
    alert(a.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
