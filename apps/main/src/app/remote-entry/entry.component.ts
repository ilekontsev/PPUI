import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'main-main-entry',
  template: `<main-nx-welcome></main-nx-welcome>`,
})
export class RemoteEntryComponent {}
