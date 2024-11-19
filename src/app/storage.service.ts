import { FAVORITES_KEY } from './favorites.service';


type StorageKeys = typeof FAVORITES_KEY

export class StorageService<storageKey extends StorageKeys, ObjectId, Object> {
  private readonly key: storageKey;

  constructor(key: storageKey) {
    this.key = key;
  }

  isStorageEmpty() {
    return !localStorage.getItem(this.key)
  }

  data(): Map<ObjectId, Object> | undefined {
    return this.isStorageEmpty() ? undefined : new Map(JSON.parse(localStorage.getItem(this.key)!))
  }

  set(value: Map<ObjectId, Object>): void {
    localStorage.setItem(this.key, JSON.stringify(Array.from(value.entries())));
  }
}
