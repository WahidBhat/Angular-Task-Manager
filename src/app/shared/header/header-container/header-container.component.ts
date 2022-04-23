import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.css']
})
export class HeaderContainerComponent implements OnInit {
@Input() headerTitle:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
