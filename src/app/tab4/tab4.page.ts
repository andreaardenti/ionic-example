import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public groups = [];
  constructor(public groupsService: GroupsService) { }

  ngOnInit() {
    this.groupsService.all().then(response => {
      this.groups = response;
    })
  }

}
