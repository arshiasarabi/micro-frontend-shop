import React from 'react'
import MarketingApp from './components/MarketingApp'
import DashboardApp from './components/DashboardApp'

export default () => {
    return <div>
        <h1>Container</h1>
        <DashboardApp />
        <hr />
        <MarketingApp />
    </div>
}