import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService } from '../firebaseAuth/auth.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    public router : Router,
    public authservice: AuthService
  ) { }

  ngOnInit(): void {
  }

}
