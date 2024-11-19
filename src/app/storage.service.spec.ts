import { StorageService, } from './storage.service';
import { FAVORITES_KEY } from './favorites.service';

declare let localStorage: Storage;

describe('StorageService', () => {
  let service: StorageService<typeof FAVORITES_KEY, number, boolean>;

  beforeEach(() => {
    localStorage.clear();

    service = new StorageService(FAVORITES_KEY);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true if item not exists in localStorage', () => {
    expect(service.isStorageEmpty()).toBeTrue();
  });

  it('should return false if item exists', () => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(new Map<number, boolean>([[1, true], [2, false]])));

    expect(service.isStorageEmpty()).toBeFalse();
  });

  it('should return the data', () => {
    const mockData = [[1, true], [2, false]];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(mockData));

    const result = service.data();

    expect(result).toEqual(new Map([[1, true], [2, false]]));
  });

  it('should return undefined if item does not exist in localStorage', () => {
    const result = service.data();

    expect(result).toBeUndefined();
  });

});
