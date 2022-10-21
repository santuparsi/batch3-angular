import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
students:Student[]=[];
student:Student;
std:string[]=["I","II","III","IV"];
  constructor() {
    this.student=new Student();
    //initiate students array
    this.students=[
      {studentId:1,studentName:'Rohan',age:10,std:"IV"},
      {studentId:2,studentName:'Tina',age:10,std:"IV"},
      {studentId:3,studentName:'Monica',age:10,std:"IV"},
      {studentId:4,studentName:'Manju',age:10,std:"IV"},
      {studentId:5,studentName:'Krishna',age:10,std:"IV"},
    ]
   }

  ngOnInit(): void {
  }
  Save() //add new student details to array
  {
    console.log(this.student)
    this.students.push(this.student);
    this.student=new Student();
    console.log(this.students)
  }

}
