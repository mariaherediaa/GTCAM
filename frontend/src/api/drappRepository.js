import axios from 'axios';

export class DrAppointmentRepository {

    url = 'http://localhost:8000'

    config ={

    };

    getAppointmentsDoctor(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/appointments/doctor/future/${id}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                });
        });
    }

    getPastAppointmentsDoctor(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/appointments/doctor/past/${id}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                });
        });
    }

    createAppointment(appointment) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/appointment`, appointment, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                });
        });
    }

    cancelAppointmentById(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/appointments/delete/${id}`, this.config)
                .then(x=> resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                });
        });
    }

    updateAppointmentById(id, appt) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/appointment/${id}`, appt, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                });
        });
    }

    getAppointmentById(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/appointments/${id}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                });
        });
    }

}