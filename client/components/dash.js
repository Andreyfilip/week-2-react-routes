import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const DashBoard = () => {
  return (
    <div>
      <Head title="Dashboard" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Dashboard</div>
          <Link to="/dashboard/profile/a25c643e-8b52-4f42-af3c-ed4fe07012d3">Go to Profile</Link>
          <Link to="/dashboard/main">Go To Main</Link>
        </div>
      </div>
    </div>
  )
}

DashBoard.propTypes = {}

export default DashBoard
