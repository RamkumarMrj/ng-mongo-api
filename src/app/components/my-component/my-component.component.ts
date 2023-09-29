import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  title = 'My App';
  users!: any[];
  posts!: any[];
  color = '';

  constructor(private myService: MyServiceService) { }

  ngOnInit(): void {
    this.myService.getUsers().subscribe(
      (data: any) => {
      this.users = data;
    });

    this.myService.getPosts().subscribe(
      (data: any) => {
        this.posts = data;
      }
    )
  }
}
