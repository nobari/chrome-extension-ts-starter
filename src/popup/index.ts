import './style.scss'
import { myCommonUtilityFunction } from '../util'
import { myFrontUtilityFunction } from '../front-util'

// the popup script with access to document object can go here
console.log('This prints to the console of the popup script')
myFrontUtilityFunction()
myCommonUtilityFunction()
