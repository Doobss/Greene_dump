import authReducer from './auth'
import browseReducer from './browse'
import donateReducer from './donate'
import homeReducer from './home'
import itemReducer from './item'
import transactionsReducer from './transactions'



function reducer(state, action) {
  const { Auth, Browse, Donate, Home, Item, Transactions, user } = state

  state.Auth = authReducer(Auth, action)
  state.Browse = browseReducer(Browse, action)
  state.Donate = donateReducer(Donate, action)
  state.Home = homeReducer(Home, action)
  state.Item = itemReducer(Item, action)
  state.Transactions = transactionsReducer(Transactions, action)

  return { ...state }
}

export default reducer;