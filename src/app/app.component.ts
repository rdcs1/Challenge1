import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  eyes;
  nose;
  mouth;
  color;
  author='David Caro'

  ngOnInit() {
    this.eyes = 'eyes'+Math.floor(Math.random()*10);
    this.nose = 'nose'+Math.floor(Math.random()*9);
    this.mouth = 'mouth'+Math.floor(Math.random()*11);
    this.color = '0123456789abcdef'.split('').map(function(v,i,a){
      return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');
    setInterval(()=>{        
      this.eyes = 'eyes'+Math.floor(Math.random()*10);
      this.nose = 'nose'+Math.floor(Math.random()*9);
      this.mouth = 'mouth'+Math.floor(Math.random()*11);
      this.color = '0123456789abcdef'.split('').map(function(v,i,a){
        return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');
    }, 2000)
  }
  title = 'app';

}

