import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-photo',
  standalone: true,
  imports: [],
  templateUrl: './profile-photo.component.html',
  styleUrl: './profile-photo.component.css'
})
export class ProfilePhotoComponent {
  imgSrc = "/images/profile-photo.jpg"
  @Input() imgId:string = "";
  @Input() imgAlt:string = "Profile Photo";
  @Input() imgSize:number = 150;

}
