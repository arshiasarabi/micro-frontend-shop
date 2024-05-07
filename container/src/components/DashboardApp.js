import React, { useRef, useEffect } from 'react'

async function loadRemoteModule(el) {
    try {
        // Dynamically import the remote module
        const { mount } = await import('dashboard/DashboardApp');

        // Use the component
        mount(el);
    } catch (error) {
        console.error('Error loading dashboard remote module:', error);
        // Handle error gracefully, e.g., show a fallback UI
    }
}

export default () => {
    const ref = useRef(null)

    useEffect(() => {
        loadRemoteModule(ref.current)
    })

    return <div ref={ref} />
}