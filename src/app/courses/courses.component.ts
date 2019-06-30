import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  id: string;
  deptAbout: string;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.http.get('http://localhost:7070/about/' + this.id).subscribe((data) => {
        // tslint:disable-next-line:no-string-literal
        this.deptAbout = data['deptContent'];
        console.log(this.deptAbout);
      });

    });
  }

}
