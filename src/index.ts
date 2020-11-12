import { User } from './User';
import { Company } from './Company';
const map = document.querySelector('#map')

new google.maps.Map(map, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
})