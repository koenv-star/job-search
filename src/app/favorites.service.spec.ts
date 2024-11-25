import { FAVORITES_KEY, FavoritesService } from './favorites.service';
import { StorageService } from './storage.service';
import { TestBed } from '@angular/core/testing';

describe('FavoritesService', () => {
  let service: FavoritesService;
  let mockStorageService: jasmine.SpyObj<StorageService<typeof FAVORITES_KEY, number>>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);

    mockStorageService = jasmine.createSpyObj('StorageService', ['data']);
    service.storageService = mockStorageService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be empty initially', () => {
    let actual = service.favorites();
    expect(actual).toEqual(new Set());
  });
});
