import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import StackNavigation from './src/navigations/StackNavigation';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import Reducers from './src/reducers'

const App = (props) => {
  return (
    <SafeAreaProvider>
      <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App