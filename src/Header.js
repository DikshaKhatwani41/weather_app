import React from 'react'
import styles from './Header.module.css'
class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <header className={styles.headerBlue}>
            <h1 className={styles.headerH1}>
                {this.props.companyName}
            </h1>
            </header>
        )
    }
}

export default Header