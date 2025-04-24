import { Component, input, Input } from '@angular/core';
import { Pet } from '../../../data/pets';
import { PetCardComponent } from '../pet-card/pet-card.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pets-list',
  standalone: true,
  imports: [PetCardComponent, AsyncPipe],
  templateUrl: './pets-list.component.html',
  styleUrl: './pets-list.component.css'
})
export class PetsListComponent {
  pets = input([]);
}
