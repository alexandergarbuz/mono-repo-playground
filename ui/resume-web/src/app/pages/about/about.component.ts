import { Component } from '@angular/core';
import { ProfilePhotoComponent } from '../../components/profile-photo/profile-photo.component';

@Component({
  selector: 'app-about',
  imports: [ProfilePhotoComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
