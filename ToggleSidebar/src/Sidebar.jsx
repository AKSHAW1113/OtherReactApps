import React from 'react'

function Sidebar({ isOpen }) {
    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>

            <h2>Sidebar</h2>
            <ul>
                <li>Dashboard</li>
                <li>Users</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </div>
    )
}

export default Sidebar