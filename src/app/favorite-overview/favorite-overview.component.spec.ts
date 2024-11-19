import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteOverviewComponent } from './favorite-overview.component';
import { Job } from '../jobs.service';
import { By } from '@angular/platform-browser';
import { FavoritesOverviewService } from '../favorites-overview.service';
import { signal, WritableSignal } from '@angular/core';

describe('FavoritesComponent', () => {
  let component: FavoriteOverviewComponent;
  let fixture: ComponentFixture<FavoriteOverviewComponent>;

  let favorites: WritableSignal<Job[]> = signal([])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteOverviewComponent],
      providers: [
        {
          provide: FavoritesOverviewService, useValue: {
            favoritesOverview: favorites.asReadonly()
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FavoriteOverviewComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render the favorites', () => {
    let favorite1: Job = {
      id: 1,
      title: 'title-1',
      companyLogo: 'logo-1',
      companyName: 'company-1',
      reference: 'reference-1'
    };
    let favorite2: Job = {
      id: 2,
      title: 'title-2',
      companyLogo: 'logo-2',
      companyName: 'company-2',
      reference: 'reference-2'
    };

    favorites.set([favorite1, favorite2])
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css(`#favorite-${favorite1.id}`))).toBeTruthy();
    expect(fixture.debugElement.query(By.css(`#favorite-${favorite2.id}`))).toBeTruthy();
  });
});
