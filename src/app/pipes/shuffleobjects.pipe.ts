import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shuffleobjects',
  standalone: true
})
export class ShuffleobjectsPipe implements PipeTransform {

  transform(value: any[]): any[] {
    if (!Array.isArray(value)) {
      return value; // Return the value if it's not an array
    }

    // Implementing Fisher-Yates Shuffle algorithm
    for (let i = value.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [value[i], value[j]] = [value[j], value[i]]; // Swap elements
    }

    return value; // Return the shuffled array
  }

}
