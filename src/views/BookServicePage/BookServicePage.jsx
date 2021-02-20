import React, { Component } from 'react';
import SUBSERVICE_DATA from './Subservice.data';
import SubserviceCollection from '../../components/subservice-collection/subservice-collection.component'
import './BookServicePage.styles.css'


class BookServicePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            subservices: SUBSERVICE_DATA
        }
    }
    render() {
      const { subservices } = this.state;
        return (
            <div className='bookservicepage'>{
              subservices.map(({ id, ...otherSubservicesProps }) =>(
                <SubserviceCollection key={id} {...otherSubservicesProps} />
              ))}
            </div>
        );
    }
}

export default BookServicePage;