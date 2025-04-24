import { HttpClient } from '@angular/common/http';
import {Injectable, inject } from '@angular/core';
import { PetModel } from '../models/pet-model.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {

    private http = inject(HttpClient);
    private readonly BASE_URL =" https://pets-react-query-backend.eapi.joincoded.com/pets"

    constructor() { }


    getPetById(id:string)
    {
      return this.http.get<PetModel>(this.BASE_URL+`/${id}`)
    }

    getAllPets()
    {
      return this.http.get<PetModel[]>(this.BASE_URL)
    }

    addPet(body: PetModel)
    {
      return this.http.post(this.BASE_URL, body)
    }

    removePet(id: string)
    {
      return this.http.delete(this.BASE_URL+`/${id}`)
    }
}
