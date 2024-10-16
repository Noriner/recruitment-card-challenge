import 'picturefill'
import custom from './modules/custom'
import cardnumber from './modules/cardnumber'
import cvvnumber from './modules/cvvnumber'
import carddisplaynumber from './modules/carddisplaynumber'
import carddisplayholder from './modules/carddisplayholder'
import carddisplaydate from './modules/carddisplaydate'
import carddisplaycvv from './modules/carddisplaycvv'

window.addEventListener('load', () => {
    custom()
    cardnumber()
    cvvnumber()
    carddisplaynumber()
    carddisplayholder()
    carddisplaydate()
    carddisplaycvv()
})