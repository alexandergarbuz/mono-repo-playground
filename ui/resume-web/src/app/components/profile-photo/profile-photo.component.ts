import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-photo',
  standalone: true,
  imports: [],
  templateUrl: './profile-photo.component.html',
  styleUrl: './profile-photo.component.css'
})
export class ProfilePhotoComponent {
  @Input() src:string = "'/images/profile-photo.jpg'"
  @Input() alt:string = 'Alexander Garbuz Photo';
  @Input() size:number = 150;

}
