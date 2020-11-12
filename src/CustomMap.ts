const map = document.querySelector('#map')

export class CustomMap {
  googleMap: google.maps.Map;  

  constructor(){
    this.googleMap =  new google.maps.Map(map, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }
}