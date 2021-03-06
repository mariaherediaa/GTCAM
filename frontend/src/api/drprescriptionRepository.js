import axios from 'axios';

export class DrPrescriptionRepository {
    url='http://localhost:8000'
    config = {

    };

    getPrescriptionsForDoctor(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/prescriptions/doctor/${id}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                });
            });
        }

    getDirectionsForPrescription(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/prescriptions/directions/${id}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                });
            });
        }

    createPrescription(prescrip) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/prescription`, prescrip, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                });
            });
        }

    updatePrescriptionById(id, pres) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/prescription/${id}`, pres, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                });
        });
    }

    createDirectionsForPrescription() {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/prescription`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                });
            });
    }

    getPatientbyDocId(docID) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/patients/${docID}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                });
        });
    }
    
}