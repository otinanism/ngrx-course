import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {ThreadsService} from "../../services/threads.service";
import {LOAD_USER_THREADS_ACTION, UserThreadsLoadedAction} from "../actions";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";

@Injectable()
export class LoadThreadsEffectService {

  constructor(private actions$: Actions, private threadService: ThreadsService) {

  }

  @Effect() userThreads$: Observable<Action> = this.actions$
    .ofType(LOAD_USER_THREADS_ACTION)
    .debug("action received")
    .switchMap(() => this.threadService.loadUserThreads())
    .debug("data received from backend")
    .map(allUserData => new UserThreadsLoadedAction(allUserData));
}
