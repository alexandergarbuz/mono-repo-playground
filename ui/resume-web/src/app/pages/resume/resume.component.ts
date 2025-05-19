import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../service/ResumeService';
import { Resume } from '../../model/Resume';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent  implements OnInit {

  private resumeService: ResumeService;
  resume: Resume = {
  name: '',
  title: '',
  email: '',
  website: '',
  linkedin: '',
  summary: ''
};

  constructor(resumeService:ResumeService) {
    this.resumeService = resumeService;
  }
  ngOnInit():void {
    this.resumeService.getResume().subscribe((data)=>{this.resume = data})
  }
}
