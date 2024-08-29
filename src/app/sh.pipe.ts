import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sh',
  standalone: true
})
export class ShPipe implements PipeTransform {

  transform(colors: string[]): string {
    if (!colors || colors.length === 0) return '';

    // Fisher-Yates (Knuth) Shuffle Algorithm
    const shuffledColors = [...colors];
    for (let i = shuffledColors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledColors[i], shuffledColors[j]] = [shuffledColors[j], shuffledColors[i]];
    }

    // Return a random color
    return shuffledColors[0]; // Get the first color after shuffling
  }
}
