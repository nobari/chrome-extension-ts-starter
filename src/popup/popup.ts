import { myCommonUtilityFunction } from '../util.js'
import { myFrontUtilityFunction } from '../front-util.js'

// the popup script with access to document object can go here
console.log('This prints to the console of the popup script')
myFrontUtilityFunction()
myCommonUtilityFunction()
