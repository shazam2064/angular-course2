import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {RouterStoreModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {PowCoreModule} from '../game/pow-core/index';
import {ROUTES} from './app.routes';
import {rootReducer} from './models/index';
import {CombatModule} from './routes/combat/index';
import {GameStateEffects} from './models/game-state/game-state.effects';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';
import {WorldModule} from './routes/world';
import {BehaviorsModule} from './behaviors/index';
import {CombatEffects} from './models/combat/combat.effects';
import {AppComponentsModule} from './components/index';
import {GameDataEffects} from './models/game-data/game-data.effects';
import {SpritesEffects} from './models/sprites/sprites.effects';

export const APP_IMPORTS = [
  BrowserModule,
  CommonModule,
  FormsModule,
  HttpModule,

  // Components
  BehaviorsModule.forRoot(),
  AppComponentsModule.forRoot(),

  // Routes
  CombatModule.forRoot(),
  WorldModule.forRoot(),
  PowCoreModule.forRoot(),

  ReactiveFormsModule,
  RouterModule.forRoot(ROUTES, {useHash: true}),
  StoreModule.provideStore(rootReducer),
  RouterStoreModule.connectRouter(),

  // TODO: store/devtools disabled because of poor performance.
  //
  // Becafuse devtools serializes state to JSON, if you have a large amount of data in your stores (~500 objects)
  // the time it takes to serialize and deserialize the object becomes significant. This is crippling to the
  // performance of the app.
  //
  // To re-enable the devtools, [fix this](https://github.com/ngrx/store-devtools/issues/57) and then pass
  // the option to use [Immutable compatible devtools](https://goo.gl/Wym3eT).
  //
  // StoreDevtoolsModule.instrumentStore(),

  EffectsModule.run(GameStateEffects),
  EffectsModule.run(CombatEffects),
  EffectsModule.run(SpritesEffects),
  EffectsModule.run(GameDataEffects),
  EffectsModule.run(AppEffects)
];
