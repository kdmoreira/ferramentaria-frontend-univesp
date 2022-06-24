import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }

}
