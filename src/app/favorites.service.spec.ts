import { FAVORITES_KEY, FavoritesService } from './favorites.service';
import { Job } from './jobs.service';
import { StorageService } from './storage.service';

describe('FavoritesService', () => {
  let service: FavoritesService;
  let mockStorageService: jasmine.SpyObj<StorageService<typeof FAVORITES_KEY, number, boolean>>;

  beforeEach(() => {
    mockStorageService = jasmine.createSpyObj('StorageService', ['isStorageEmpty', 'data']);

    service = new FavoritesService()
    service.storageService = mockStorageService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be empty initially', () => {
    expect(service.favorites()).toEqual(new Map());
  });

  it('when storage is empty, should initialize to a map with all job ids default to false', () => {
    const jobs = [{id: 1}, {id: 2}] as Job[];

    mockStorageService.isStorageEmpty.and.returnValue(true); // Mock isEmpty to return true

    service.initializeFavorites(jobs);

    const expectedMap = new Map<number, boolean>([
      [1, false],
      [2, false]
    ]);
    expect(service.favorites()).toEqual(expectedMap);
  });

  it('when storage is not empty, should initialize to values from storage', () => {
    const jobs = [{id: 1}, {id: 2}] as Job[];

    mockStorageService.isStorageEmpty.and.returnValue(false);
    let favoritesFromStorage = new Map<number, boolean>([
      [1, true],
      [2, false]
    ]);
    mockStorageService.data.and.returnValue(favoritesFromStorage);

    service.initializeFavorites(jobs);

    expect(service.favorites()).toEqual(favoritesFromStorage);
  });
});
