import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrefixPipe } from '../prefix-id.pipe';
import { FavoritesOverviewService } from '../favorites-overview.service';

@Component({
  selector: 'js-favorite-overview',
  standalone: true,
  imports: [
    PrefixPipe
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
