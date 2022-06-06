import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Main" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Main</div>
          <Link to="/dashboard/profile/a25c643e-8b52-4f42-af3c-ed4fe07012d3">Go to Profile</Link>
          <Link to="/dashboard">Go To Root</Link>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main