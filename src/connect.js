import React from 'react'
import {AppContextConsumer} from './AppContext'
 
const connect = (consumer, mapContextToProps = () => ({})) => (
  <AppContextConsumer>{(context) => (
    React.createElement(consumer, mapContextToProps(context))
  )}
  </AppContextConsumer>
)

export default connect