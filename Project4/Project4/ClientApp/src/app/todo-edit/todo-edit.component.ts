import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { TodoCustom } from '../todo-management/todo-custom';
import { TodoManagementService } from '../todo-management/todo-management.service';
import * as moment from 'moment';
import { TodoTagCustom } from '../todo-management/todo-tag-custom';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  faCalendar = faCalendar;
  dueDate: NgbDateStruct;
  dueTime: NgbTimeStruct;
  todo: TodoCustom;

  constructor(public activeModal: NgbActiveModal, private mgmtService: TodoManagementService) { }

  ngOnInit() {
    this.todo = new TodoCustom();
    this.todo.tags = [];
    this.todo.id = 1 ;
    this.todo.tags[0] = new TodoTagCustom();
    this.dueTime = { hour: 12, minute: 30, second: 0 };
  }

  save() {
    const date = moment(this.dueDate);
    date.hours(this.dueTime.hour);
    date.minutes(this.dueTime.minute);
    date.seconds(this.dueTime.second);
    const utcDate = date.utc();
    this.todo.due = utcDate.toDate();
    this.mgmtService.editTodo(this.todo).subscribe(
      () => {
        this.activeModal.close();
      }
    )
  }
}
