import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevoluis',
  templateUrl: './nuevoluis.page.html',
  styleUrls: ['./nuevoluis.page.scss'],
})
export class NuevoluisPage implements OnInit {
name = 'Luis Forero';
usuario = {
  nombre: 'Luis Forero',
  password: 1234,
  estado: true
};
usuario2 = [
{
  nombre : 'dairo quintana',
  pass : 1234,
  estado: true
},
{
 nombre: 'maria torres',
 pass : 1234,
  estado : false
}
];
  constructor() { }

  ngOnInit() {
  }

}
