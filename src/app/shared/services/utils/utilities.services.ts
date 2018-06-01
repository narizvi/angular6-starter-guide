import { Subscription } from 'rxjs';
import { Constants } from '@shared/services/constants';

export abstract class Utilities {
  public static readonly isDefined = (value: any): boolean =>
    !(value === null || typeof value === 'undefined' || value === undefined);

  public static readonly destroySubscriptions = function(...args: Subscription[]): void {

    args.forEach(s => {
      if (Utilities.isDefined(s) && (s[Constants.Observables.Closed] && !s.closed)) {
        s.unsubscribe();
      }
    });
  };
}
