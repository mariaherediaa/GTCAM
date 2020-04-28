import React from 'react';
import { PharmacyRepository } from '../../api/pharmacyRepository';
import { Container } from 'react-bootstrap';
import PharmNav from '../pharmNav/pharmNav';
import './pharminv.css';

export class PharmInventory extends React.Component {
    
    pharmRepo = new PharmacyRepository();
    constructor(props) {
        super(props);
        this.state = {
            ID: '',
            pharmName: '',
            pharmHours: '',
            address: '',
            phoneNumber: '',
            medications: []
        }
    }

    render() {
        return <>
        <PharmNav></PharmNav>
        <br/>
        <Container>
            <div className="font-weight-bold text-center mb-3" id='pharm-h'>
            <h4>Inventory for { this.state.pharmName } </h4>
            </div>
            
        {
            this.state.medications.map((medication) => (
                <div key={ medication.medName } className="card mb-3" id='pharm'>
                    <h5 className="card-header text-dark mb-3">
                        { medication.medName }
                    </h5>
                    <div className="card-body">
                        <p className="card-text">
                            <b>Dosage: </b> { medication.dosage } <br/>
                            <b>Number of Doses: </b> { medication.pillCount } <br/>
                            <b>Details: </b> { medication.details } <br/>
                            <b>Quantity: </b> { medication.quantity } <br/>
                            <b>Location: </b> { medication.physicalLocation } <br/>
                        </p>
                    </div>
                </div>
                        
                ))
                }
                <a href="/Pharm/pharmacies" id='back-pharm' className="btn btn-primary"> Back to Pharmacies</a> <br/>
                <a href="/PharmHome" id='return-phdash' className="btn btn-primary"> Back to Dashboard</a>
                <br/><br/>
            </Container>


        </>;
    }

    componentDidMount() {
        let pharmId = +this.props.match.params.pharmid;
        if(pharmId) {
        this.pharmRepo.getMedicationsInPharmacy(pharmId)
            .then(medications => {sortByName(medications);this.setState({medications: medications})});

        this.pharmRepo.getPharmacy(pharmId)
            .then(pharmacy => this.setState({ pharmName: pharmacy.pharmName }));
        
        }
    }
}

function sortByName(medications){
	medications.sort((a, b) =>{
		if(a.medName > b.medName)
			return 1;
		return -1;
	})
}

function sortByQuantity(medications){
	medications.sort((a, b) =>{
		if(a.quantity > b.quantity)
			return 1;
		return -1;
	})
}

export default PharmInventory;