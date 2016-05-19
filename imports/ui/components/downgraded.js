import module from './module'
import { SecondMeteorSampleComponent } from './secondMeteorSample.component.ts'
import { upgradeAdapter } from '../upgradeAdapter.ts'

angular.module(module.name)
  .directive('secondMeteorSample',
    upgradeAdapter.downgradeNg2Component(SecondMeteorSampleComponent))
