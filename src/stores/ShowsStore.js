import AppDispatcher from '../AppDispatcher'
import { EventEmitter } from 'events'
import SearchActions from '../components/SearchResults'


let _shows = []

class ShowsStore extends EventEmitter {
  constructor(){
    super()
    AppDispatcher.register(action => {
      switch(action.type) {
        case 'SHOWS_RECEIVED':
        _shows = action.payload.shows
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

  getShows(){
    return _shows
  }

}

export default new ShowsStore