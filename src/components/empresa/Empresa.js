import React, { Component } from 'react';
import CardEmpresa from './CardEmpresa';
import Api from '../../axios/api';

import { getToken, getCompanyId, getCompany } from '../../services/auth-service';

class Empresa extends Component {

    state = {
        companies: []
    }


    // componentDidMount = async () => {
    //     console.log("component did")
    //     var myHeaders = new Headers();
    //     myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwNkAwNi5jb20iLCJleHAiOjE1OTU2MjE1MDF9.JoXu0ixfZhMHQ-f5q3yr4q4njOQkL53bCPOpuWp_VZzekDSBfiKCeVmYztXg9RjEB3MiIBjc-6iTj8JFePxaRA");

    //     var raw = "";

    //     var requestOptions = {
    //         method: 'GET',
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: 'follow'
    //     };

    //     fetch("http://localhost:8080/companies/8", requestOptions)
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));
    // }

    componentDidMount = async () => {
        console.log()
        this.setState({ companies: getCompany() })
        // try {
        //     var res = await Api.get(`/companies/${getCompanyId()}` , {
        //         headers: {
        //             Authorization: getToken()
        //         }
        //     })
        //     this.setState({ companies: res.data })
        // } catch (error) {
        //     console.log(error)
        // }
    }

    render() {
        const {companies} = this.state
        return (
            <div className="container-fluid">
                <div className="row">
                    <CardEmpresa companies={companies} key={companies.id} refresh={this.componentDidMount} />
                </div>
            </div>
        )
    }
}

export default Empresa;