import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService } from '../firebaseAuth/auth.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    public router : Router,
    public authservice: AuthService
  ) { }

  ngOnInit(): void {
  }

}
