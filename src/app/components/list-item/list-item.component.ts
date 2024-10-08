import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../../item';
import { faTimes, faCheckSquare, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input () item!: Item;
  @Output () onDeleteItem = new EventEmitter<Item>();
  @Output () onDoneComprado = new EventEmitter<Item>();

  faTimes = faTimes;
  faCheckSquare = faCheckSquare;
  faCheckCircle = faCheckCircle;

  onDelete(item: Item){
    this.onDeleteItem.emit(item);
  }

  onDone(item: Item){
    this.onDoneComprado.emit(item);
  }
}
