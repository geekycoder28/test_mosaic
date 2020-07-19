import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { API_BASE_URL } from 'config'

axios.defaults.baseURL = API_BASE_URL

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
