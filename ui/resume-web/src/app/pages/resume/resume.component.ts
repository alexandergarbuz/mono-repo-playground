import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../service/ResumeService';
import { Resume } from '../../model/Resume';
import { NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-resume',
  imports: [NgIf, NgForOf], 
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent  implements OnInit {

  private resumeService: ResumeService;
  public resume?: Resume;
  public loading: boolean = true;
  public error?: string;

  constructor(resumeService:ResumeService) {
    this.resumeService = resumeService;
  }
  ngOnInit():void {
    this.resumeService.getResume().subscribe({
      next: (data: Resume) => {
        this.resume = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load resume', err);
        this.error = 'Failed to load resume data.';
        this.loading = false;
      }
    });
  }
}
