import AppDispatcher from '../AppDispatcher'
import { EventEmitter } from 'events'

let _favs = []
let _localStorage = JSON.parse(localStorage.getItem(_favs))

class FavStore extends EventEmitter {
  constructor(){
    super()
    AppDispatcher.register(action => {
      switch(action.type) {
        case 'FAVS_RECEIVED':
        _favs.push(action.payload.fav)
        localStorage.setItem(_favs , JSON.stringify(_favs));
        _favs = JSON.parse(localStorage.getItem(_favs))
        console.log('I am localStorage: ', JSON.parse(localStorage.getItem(_favs)))
        this.emit('CHANGE')
        break;
      }
    })
  }

  startListening(cb){
    this.on('CHANGE', cb)
  }

  stopListening(cb){
    this.on('CHANGE', cb)
  }

  getFavs() {
    return _favs
  }

}

export default new FavStore