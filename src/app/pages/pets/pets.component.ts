import { Component, inject } from '@angular/core';
import { PetsHeaderComponent } from '../../components/pets-header/pets-header.component';
import { PetsListComponent } from '../../components/pets-list/pets-list.component';
import { pets } from '../../../data/pets';
import { PetService } from '../../shared/services/pet.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { PetModel } from '../../shared/models/pet-model.model';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [PetsHeaderComponent, PetsListComponent],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css',
})
export class PetsComponent {
  query = '';

  private petService = inject(PetService);

  allPets = toSignal(this.petService.getAllPets(), {initialValue: []})
  
  setQuery(query: string) {
    this.query = query;
  }

  get filteredPets() {
    return this.allPets().filter((pet) =>
      pet.name.toLowerCase().includes(this.query.toLowerCase())
    );
  }
}


