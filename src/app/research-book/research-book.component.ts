import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-research-book',
  templateUrl: './research-book.component.html',
  styleUrls: ['./research-book.component.css']
})
export class ResearchBookComponent {
  constructor(public dialog: MatDialog) {}

  
}