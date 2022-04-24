import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-footer-item',
  templateUrl: './footer-item.component.html',
  styleUrls: ['./footer-item.component.css']
})
export class FooterItemComponent implements OnInit {

@Input() routeLink:string="";
@Input() routeName:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
