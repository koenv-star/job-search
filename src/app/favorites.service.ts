import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Job } from './jobs.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private readonly _favorites: WritableSignal<Map<number, boolean>> = signal(new Map<number, boolean>())
  favorites: Signal<Map<number, boolean>> = this._favorites.asReadonly()

  toggleFavorite(id: number): void {
    this._favorites.update(favorites => {
      const newFavorites = new Map(favorites);
      newFavorites.set(id, !newFavorites.get(id));
      return newFavorites;
    });
  }

  initializeFavorites(jobs: Job[]): void {
    let favorites: Map<number, boolean> = new Map<number, boolean>()
    jobs.forEach(job => favorites.set(job.id, false))
    this._favorites.set(favorites);
  }
}
