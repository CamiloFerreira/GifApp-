import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {

  constructor(private gifsservice:GifsService) { }
  get historial(){
    return this.gifsservice.historial;
  }

  buscar(termino:string){
    this.gifsservice.buscarGifs(termino);
  }

}
