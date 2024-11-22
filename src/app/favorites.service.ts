import { effect, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Job } from './jobs.service';
import { StorageService } from './storage.service';

export const FAVORITES_KEY = 'FAVORITES';
const favoritesStorageService = new StorageService<typeof FAVORITES_KEY, number, boolean>(FAVORITES_KEY)

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private readonly _favorites: WritableSignal<Map<number, boolean> | undefined> = signal(undefined)
  favorites: Signal<Map<number, boolean> | undefined> = this._favorites.asReadonly()

  storageService = favoritesStorageService;

  constructor() {
    effect(() => {
      if (this.favorites()) {
        this.storageService.set(this.favorites()!)
      }
    });
  }

  toggleFavorite(id: number): void {
    this._favorites.update(favorites => {
      const newFavorites = new Map(favorites);
      return newFavorites.set(id, !newFavorites.get(id));
    });
  }

  initializeFavorites(jobs: Job[]): void {
    let favorites = this.storageService.isStorageEmpty() ? this.defaultFavoritesMap(jobs) : this.storageService.data()!;
    this._favorites.set(favorites)
  }

  private defaultFavoritesMap(jobs: Job[]): Map<number, boolean> {
    let favorites: Map<number, boolean> = new Map<number, boolean>()
    jobs.forEach(job => favorites.set(job.id, false))
    return favorites
  }
}
