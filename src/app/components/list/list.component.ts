import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { Item } from '../../../item';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{

  itens: Item[] = [];

  constructor(private listService: ListService){}

  ngOnInit(): void {
    this.listService.getList().subscribe((dado) => {
      this.itens = dado;
      console.log(dado);
    })
  }

  deleteItem(item:Item){
    this.listService.deleteItem(item).subscribe(() => 
      (this.itens = this.itens.filter((i) => i.id == item.id)));
  }

  checkItem(item: Item){
    item.comprado = !item.comprado;
    this.listService.updateItem(item).subscribe();
  }
}
