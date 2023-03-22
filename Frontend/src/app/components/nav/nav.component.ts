import { Component, OnChanges, OnInit, Renderer2 } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router : Router,private auth1: AuthService,private renderer: Renderer2, public jwt : JwtService) { }

  ngOnInit(): void {
  }

}
