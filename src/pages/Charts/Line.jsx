import React from 'react'
import { Header , LineChart } from '../../components';


const Line = () => {
  return (
    <div className='m-4 md:10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Chart" title="Inflation Rate"/>
      <div className='w-full'>
        <LineChart/>
      </div>
      <div className="mt-20 text-center">
      © 2023 All rights reserved by <a href="https://github.com/monashazly/Instantore-dashboard">Mona shazly</a>
      </div>
    </div>
  )
}

export default Line
