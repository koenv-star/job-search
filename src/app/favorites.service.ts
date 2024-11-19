import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Job } from './jobs.service';
import { StorageService } from './storage.service';

export const FAVORITES_KEY = 'FAVORITES';
const favoritesStorageService = new StorageService<typeof FAVORITES_KEY, Map<number, boolean>>(FAVORITES_KEY)

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private readonly _favorites: WritableSignal<Map<number, boolean>> = signal(new Map<number, boolean>())
  favorites: Signal<Map<number, boolean>> = this._favorites.asReadonly()
  storageService: StorageService<typeof FAVORITES_KEY, Map<number, boolean>> = favoritesStorageService;

  toggleFavorite(id: number): void {
    this._favorites.update(favorites => {
      const newFavorites = new Map(favorites);
      return newFavorites.set(id, !newFavorites.get(id));
    });
  }

  initializeFavorites(jobs: Job[]): void {
    let favorites = this.storageService.isEmpty() ? this.defaultFavoritesMap(jobs) : this.storageService.data()!;
    this._favorites.set(favorites)
  }

  private defaultFavoritesMap(jobs: Job[]): Map<number, boolean> {
    let favorites: Map<number, boolean> = new Map<number, boolean>()
    jobs.forEach(job => favorites.set(job.id, false))
    return favorites
  }
}
