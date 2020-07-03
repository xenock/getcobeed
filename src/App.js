import React from 'react'
import {
  setLoading,
  setUnloading,
  toggleLoading,
  loading
} from './app/slices/loaderSlice'
import { useSelector, useDispatch } from 'react-redux'

import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop, faSync } from '@fortawesome/free-solid-svg-icons'
import './App.scss'

import Button from './components/Button'

function App () {
  const isLoading = useSelector(loading)
  const dispatch = useDispatch()

  return (
    <main className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <Button onClickHandler={_ => dispatch(setLoading())}>
        <FontAwesomeIcon icon={faPlay} />
      </Button>
      <Button onClickHandler={_ => dispatch(setUnloading())}>
        <FontAwesomeIcon icon={faStop} />
      </Button>
      <Button onClickHandler={_ => dispatch(toggleLoading())}>
        <FontAwesomeIcon icon={faSync} />
      </Button>
      <hr />
      <p>{isLoading ? 'cargando...' : 'terminado!'}</p>
    </main>
  )
}

export default App
