import React from 'react'
import Navbar from '../../components/Navbar'
import styles from "@/styles/Home.module.css"

function contact() {
  return (
    <div>
      <Navbar />
        <h1 className={styles.heading}>This is the contact page</h1>
    </div>
  )
}

export default contact
