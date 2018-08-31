import React from 'react'

const AppContext = React.createContext({})

export class AppContextProvider extends React.Component {
  constructor(props) {
    super(props)
    this.updateState = this.updateState.bind(this)

    this.state = {
      actions: {
        updateState: this.updateState
      },
      data: {
        ...this.props.initialState
      }
    }
  }

  updateState(props) {
    console.group();
    console.log('diff: ', props)
    this.setState((prevState) => { 
      console.log('previous state:', prevState.data)
      const newState = {
        actions: {...this.state.actions}, 
        data: {
          ...this.state.data,
          ...props,
        }
      }
      console.log('new state:', newState)
      return newState
    })

  }

  render() {
    return(
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  } 
}

export const AppContextConsumer = AppContext.Consumer
