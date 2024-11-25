import { StorageService, } from './storage.service';
import { FAVORITES_KEY } from './favorites.service';

declare let localStorage: Storage;

describe('StorageService', () => {
  let service: StorageService<typeof FAVORITES_KEY, number>;

  beforeEach(() => {
    localStorage.clear();

    service = new StorageService(FAVORITES_KEY);
  });

  afterEach(() => {
    localStorage.clear();

    service = new StorageService(FAVORITES_KEY);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return the data', () => {
    const mockData = [1];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(mockData));

    const result = service.data();

    expect(result).toEqual(new Set([1]));
  });

  it('should return empty set if item does not exist in localStorage', () => {
    const result = service.data();

    expect(result).toEqual(new Set());
  });

});
