import React from 'react'
// import LessonNine from './components/LessonNine'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import { Provider } from 'react-redux'
import store from './redux/store.js'
import LessonSeven from './components/LessonSeven.js'

function App2() {
  return (
    <div>
      <Provider store={store}>
        {/* <LessonNine/> */}
        <LessonSeven/>
      </Provider>
    </div>
  )
}

export default App2
