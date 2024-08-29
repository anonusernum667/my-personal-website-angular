import { Component , OnInit, Renderer2, RendererType2} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShuffleobjectsPipe } from '../pipes/shuffleobjects.pipe';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,ShuffleobjectsPipe],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  images: { src: string, alt: string }[] = [];

  ngOnInit() {
    const numberOfImages = 91; // Adjust this to the number of images you have
    for (let i = 1; i <= numberOfImages; i++) {
      this.images.push({
        src: `images/img(${i}).jpg`,
        alt: `example ${i}`
      });
    }
  }
}



