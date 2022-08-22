import React from 'react'
import styles from './Footer.module.css'
class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <footer className={styles.footerBlue}>
            <h3 className={styles.allH3}>
                {this.props.authorName}
            </h3>
            </footer>
        )
    }
}

export default Footer