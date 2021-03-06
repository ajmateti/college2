import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  id: string;
  selected: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      // tslint:disable-next-line:no-string-literal
      this.id = params['id'];
    });
  }

}
