import React, { Suspense } from 'react'

const LoadingContainer = () => (
    <div className="loading__container">
        <h1>Loading</h1>
    </div>
)

const Loading = ({ isLoaded, children }) => (
    <React.Fragment>
        <Suspense fallback={<LoadingContainer />}>
            {!isLoaded &&
                <LoadingContainer />
            }
            {children}
        </Suspense>
    </React.Fragment>
)

export default Loading