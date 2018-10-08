import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../Entities/utilisateur";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  liste_utilisateurs:Utilisateur[];
  utilisateur:Utilisateur;
  constructor(  private router:Router) { }

  ngOnInit() {
  }
  register(f){
    if (f.valid) {
      this.utilisateur = new Utilisateur(f.value.email,f.value.password);
      this.liste_utilisateurs.push(this.utilisateur);
    }
    this.router.navigate(['terms']);
  }

}
