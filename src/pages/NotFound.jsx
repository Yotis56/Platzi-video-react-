import React from 'react'

//styles
import '../assets/styles/pages/NotFound.scss'

const NotFound = () => (
  <React.Fragment>
    <section className="notfound">
      <div className="notfound-container">
        <div className="notfound-number"><p>404</p></div>
        <div className="notfound-text"><p>página no encontrada</p></div>
      </div>
    </section>
  </React.Fragment>
)

export default NotFound