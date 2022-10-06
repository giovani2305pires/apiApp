import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  page;
  perPage;
  total;
  totalPages;
  data;

  constructor(private apiService: ApiService) {this.buscarTodos();}

  buscarTodos(page=1){
    this.apiService.buscarUsuarios(page).subscribe(usuarios=>{
      console.log(usuarios);
      this.page=usuarios['page'];
      this.perPage=usuarios['per_page'];
      this.total=usuarios['total'];
      this.totalPages=usuarios['total_pages'];
      this.data=usuarios['data'];
    });
  }

}
