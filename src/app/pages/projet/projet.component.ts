import { Component, OnInit } from '@angular/core';
import {ProjetService} from './projet.service';
import {Router} from '@angular/router';
import {Projet} from './projet.model';

@Component({
  selector: 'ngx-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss'],
})
export class ProjetComponent {

  projet: Projet = new Projet();

  constructor(private router: Router, private poleService: ProjetService) {

  }

  createPole(): void {
    this.poleService.createProjet(this.projet)
      .subscribe(data => {
        alert('Project created successfully.');
        this.router.navigate(['/pages/list-projets']);

      });

  }
}
