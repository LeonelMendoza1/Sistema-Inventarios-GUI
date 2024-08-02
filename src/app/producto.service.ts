import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService{
 
  private url = "http://localhost:8080/inventario-app/productos";

  constructor(private clienteHttp: HttpClient) { }

  obtenerProcutosLista(): Observable<Producto[]>{
    return this.clienteHttp.get<Producto[]>(this.url);
  }

  agregarProducto(producto: Producto): Observable<Object>{
    return this.clienteHttp.post(this.url, producto);
  }

  obtenerProductoId(id: number){
    return this.clienteHttp.get<Producto>(`${this.url}/${id}`);
  }

  editarProducto(id: number, producto: Producto): Observable<Object>{
    return this.clienteHttp.put(`${this.url}/${id}`, producto);
  }

  eliminarProdcuto(id: number): Observable<Object>{
    return this.clienteHttp.delete(`${this.url}/${id}`);
  }
}
