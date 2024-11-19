import { FAVORITES_KEY } from './favorites.service';


type Keys = typeof FAVORITES_KEY

export class StorageService<K extends Keys, T> {
  private readonly key: K;

  constructor(key: K) {
    this.key = key;
  }

  isEmpty() {
    return true
  }

  data(): T | undefined {
    return undefined
  }
}
