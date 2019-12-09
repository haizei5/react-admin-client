import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducer'
import thunk from 'redux-thunk'

let store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store