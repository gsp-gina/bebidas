import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BebidasService {

  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink';

  constructor(private http: HttpClient) {}


  /*lastValueFrom() tiene mejor soporte a largo plazo y claridad de intención: 
  espera el último valor del observable (aunque sea uno solo).*/
  
  async getBebidas(): Promise<any> {
    try {
      const response = await lastValueFrom(this.http.get(this.apiUrl));
      return response;
    } catch (error:any) {
      console.log("hola");
      alert('Error al obtener bebidas: ' + error.message);
      return null;
    }
  }

  
}
