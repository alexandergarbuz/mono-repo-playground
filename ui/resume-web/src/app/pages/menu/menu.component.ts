import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgIf, NgForOf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuCategories = [
    { id: 'appetizers', name: 'Appetizers', items: this.generateItems('Appetizer') },
    { id: 'main-courses', name: 'Main Courses', items: this.generateItems('Main Course') },
    { id: 'desserts', name: 'Desserts', items: this.generateItems('Dessert') },
    { id: 'drinks', name: 'Drinks', items: this.generateItems('Drink') },
    { id: 'cocktails', name: 'Cocktails', items: this.generateItems('Cocktail') }
  ];

  activeSection = 'appetizers';

  @HostListener('window:scroll', [])
  onScroll(): void {
    for (let category of this.menuCategories) {
      const section = document.getElementById(category.id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          this.activeSection = category.id;
          break;
        }
      }
    }
  }

  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private generateItems(base: string): string[] {
    return Array.from({ length: 10 }, (_, i) => `${base} Item ${i + 1}`);
  }
}
