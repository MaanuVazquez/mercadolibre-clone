import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './global.scss'
import Header from '../Header'
import ItemList from '../ItemList'
import Product from '../Product'

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/items/:id' component={Product} />
            <Route exact path='/items' component={ItemList} />
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
