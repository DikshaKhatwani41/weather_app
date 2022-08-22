import React from 'react'
import styles from './Nav.module.css'
class Nav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (

                <ul className={styles.ulBlack}>
                    <li key='0' className={styles.liFloat}><a href='href#' className={styles.liAnchor}>Home</a></li>
                    <li key='1' className={styles.liFloat}><a href='href#' className={styles.liAnchor}>Profile</a></li>
                    <li key='2' className={styles.liFloat}><a href='href#' className={styles.liAnchor}>Products</a></li>
                </ul>

        )
    }
}


export default Nav