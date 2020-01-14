import React from 'react'
import User from '../components/User'

const Home = () => (
  <div>
    <div>
      <h1 className="title">Welcome to Next.js!</h1>

      <User name="Andrev" job="CTO"/>
      <User name="Cattani" job="DEV"/>
      <User name="Gabriel" job="DEV"/>
      <User name="Fredes" job="DEV"/>
      <User name="Maira" job="DESIGN"/>
    </div>

    <style jsx>{`
      .title {
        margin: 0;
        color: blue;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
        text-align: center;
      }
    `}</style>
  </div>
)

export default Home
