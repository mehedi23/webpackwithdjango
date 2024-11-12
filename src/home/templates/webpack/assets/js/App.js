import React, { useState } from 'react'
import { AllPages } from './app/router'
import {useRoutes, Link} from 'react-router-dom'

function App() {
    const [ testing, setTesting ] = useState(false)
    console.log("========", isAuth)

    const routes = useRoutes(AllPages())
    
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/details">Details</Link>
            {routes}
        </div>
    )
}

export default App