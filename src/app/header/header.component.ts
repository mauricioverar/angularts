import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html', // template para el html
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  currentDate = new Date()
  resultado = 0

  constructor() { }
  
  ngOnInit() {
    // this.currentDate = new Date()
    console.log('this.currentDate')
    console.log(this.currentDate)
    // "2023-11-22T14:16:14.852Z"
    const nombre = 'mao'
    console.log(`hi my name is ${nombre}, ${this.resultado}`)
  }

  sumar(a: number, b: number) {
    this.resultado = a + b
  }
}
