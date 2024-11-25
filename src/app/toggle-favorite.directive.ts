import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { FavoritesService } from './favorites.service';

@Directive({
  selector: '[jsToggleFavorite]',
  standalone: true
})
export class ToggleFavoriteDirective {

  constructor(private readonly favoritesService: FavoritesService) {
  }

  @Input({required: true, alias: 'jsToggleFavorite'})
  id!: number;

  @HostListener('click')
  toggleFavorite() {
    this.favoritesService.toggleFavorite(this.id)
  }

  @HostBinding('class.active')
  get isFavorite() {
    return this.favoritesService.favorites().has(this.id)
  }

}
