import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePhotoComponent } from './components/profile-photo/profile-photo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule, ProfilePhotoComponent],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Resume Project';
  subTitle = 'Learning Angular in small sandbox';
}
