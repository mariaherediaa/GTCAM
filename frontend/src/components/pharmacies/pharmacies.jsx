import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from '../nav/nav';
import './pharmacies.css';
import { PharmacyRepository } from '../../api/pharmacyRepository';

export class Pharmacies extends React.Component {
    
    pharmacyRepo = new PharmacyRepository();
    
    state = {
        pharmacies: []
    }

    render(){
        return <>
        <Nav></Nav>
            <p></p>
            <Container>

                <div className="card card bg-light mb-3" id='mess-h1'>
                    <div className="card-header font-weight-bold text-center mb-3" id='mess-h'>
                        <h4>Welcome to Your List of Pharmacies!</h4>
                    </div>

                    <div className="card-body">
                    <p className="text-center">
                            Here you can view all of your pharmacies. <br></br>
                            The heart shows your prefered pharmacy to pick up prescriptions!
                    </p>
                    </div>
                </div>
                {
                    this.state.pharmacies.map(pharmacy =>
                        <div key={pharmacy.ID } className="card mb-3">
                            <h5 className="card-header text-dark mb-3">
                                {pharmacy.pharmName}
                            <svg class="bi bi-heart" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="float-right">
                                <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z" clip-rule="evenodd"/>
                            </svg>
                            </h5>
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Address: </b> { pharmacy.address } <br/>
                                    <b>Hours of Operation: </b> { pharmacy.pharmHours } <br/>
                                    <b>Contact: </b> { pharmacy.phoneNumber } <br/>
                                </p>
                            </div>
                        </div>
                        
                    )
                }
                <br/>
                <a href="/DashBoard" id='return-dash' className="btn btn-primary"> Back to Dashboard</a>
                
            </Container>
        </>;
    }

    componentDidMount() {
        this.pharmacyRepo.getPharmacies()
            .then(pharmacies => this.setState({ pharmacies }));
    }

}

export default Pharmacies;