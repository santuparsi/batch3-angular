import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
student:Student;
  constructor() {
    //initate the model
    this.student=new Student();
    this.student.studentId=34093;
    this.student.studentName="Vaishnavi";
    this.student.age=10;
    this.student.std="IV";
   }

  ngOnInit(): void {
  }

}
