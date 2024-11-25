import { effect, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { StorageService } from './storage.service';

export const FAVORITES_KEY = 'FAVORITES';
const favoritesStorageService = new StorageService<typeof FAVORITES_KEY, number>(FAVORITES_KEY)

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  storageService = favoritesStorageService;

  private readonly _favorites: WritableSignal<Set<number>> = signal(this.storageService.data())
  favorites: Signal<Set<number>> = this._favorites.asReadonly()

  constructor() {
    effect(() => {
      if (this.favorites()) {
        this.storageService.set(this.favorites())
      }
    });
  }

  toggleFavorite(id: number): void {
    this._favorites.update(favorites => {
      favorites.has(id) ? favorites.delete(id) : favorites.add(id);
      return new Set(favorites)
    });
  }
}
