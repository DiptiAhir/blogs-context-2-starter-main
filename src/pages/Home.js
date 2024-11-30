import React from 'react'
import Pagination from '../components/Pagination'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
export const Home = () => {
  return (
    <div>
        <Header />
        <div>
            <Blogs/>
            <Pagination/>

        </div>
    </div>
  )
}
 