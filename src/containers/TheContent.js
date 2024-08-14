import React, { Suspense } from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
// import { CContainer, CFade } from '@coreui/react'

// routes config
//import routes from '../routes'

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

const TheContent = ({ routes, path }) => {
    return (
        <main className="c-main">
            {/* <CContainer fluid> */}
            <div>
                <Suspense fallback={loading}>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                        // <CFade>
                                        <div>
                                            <route.component {...props} />
                                        </div>
                                        // </CFade>
                                    )}
                                />
                            )
                        })}
                    </Switch>
                </Suspense>
                {/* </CContainer> */}
            </div>
        </main>
    )
}

export default React.memo(TheContent)