import { FAVORITES_KEY } from './favorites.service';


type StorageKeys = typeof FAVORITES_KEY

export class StorageService<StorageKey extends StorageKeys, Data> {
  private readonly key: StorageKey;

  constructor(key: StorageKey) {
    this.key = key;
  }

  private isStorageEmpty() {
    return !localStorage.getItem(this.key)
  }

  data(): Set<Data> {
    return this.isStorageEmpty() ? new Set() : new Set(JSON.parse(localStorage.getItem(this.key)!))
  }

  set(value: Set<Data>): void {
    localStorage.setItem(this.key, JSON.stringify(Array.from(value)));
  }
}
