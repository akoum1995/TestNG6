import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollEvent } from 'ngx-scroll-event';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
  check_button:boolean=false;
  valide_button:boolean=false;

  constructor(private router:Router) { }
  ngOnInit() {
    this.returnCheck()
  }
  handleScroll(event: ScrollEvent) {
    if (event.isReachingBottom) {
      this.check_button= true;
    }
    else
    {
      this.check_button = false;
    }

  }
  returnCheck()
  {
    return this.check_button;
  }
  returnValide()
  {
    return this.valide_button;
  }
  verifvalide(e)
  {
    if(e.target.checked)
      this.valide_button= true;
    else
      this.valide_button= false;
  }
  ValidationDone()
  {
    this.router.navigate(['login']);
  }

}
