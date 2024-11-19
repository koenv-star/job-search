import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrefixPipe } from '../prefix-id.pipe';
import { FavoritesOverviewService } from '../favorites-overview.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'js-favorite-overview',
  standalone: true,
  imports: [
    PrefixPipe,
    RouterLink
  ],
  templateUrl: './favorite-overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ''
})
export class FavoriteOverviewComponent {

  protected favoriteOverview = this.favoritesOverviewService.favoritesOverview

  constructor(private readonly favoritesOverviewService: FavoritesOverviewService) {
  }

}
