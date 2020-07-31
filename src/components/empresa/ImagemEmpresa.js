import React, { Component } from 'react'
import api from '../../services/api'

import { getCompanyId } from '../../services/auth-service'

class CadastroImagem extends Component {

    state = {
        fileName: '',
        mimetype: '',
        base64: '',
        imagePreview: ''
    }

    _handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        let fileName = e.target.files[0].name;
        let mimetype = e.target.files[0].type;

        reader.onloadend = async () => {
            await this.setState({
                fileName: fileName,
                mimetype: mimetype,
                base64: reader.result.split(',')[1],
                imagePreview: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    enviaDados = async (e) => {
        e.preventDefault()
        const dados = this.state
        delete dados.imagePreview
        await api.patch(`/companies/${getCompanyId()}/logo`, dados)
        this.props.history.push('/user/company')
    }

    render() {

        let { imagePreview } = this.state;
        let $imagePreview = null;
        if (imagePreview !== '') {
            $imagePreview = (
                <div className="container" style={{ height: 250, width: 250 }}>
                    <img className="border rounded mx-auto" style={{ height: 250, width: 250 }} src={imagePreview} alt={"Pre-visualizacao"} />
                </div>);
        } else {
            $imagePreview = (<div className="container border" style={{ height: 250, width: 280 }}></div>);
        }

        return (
            <div className="container-fluid">
                <h1 className="mx-auto">Cadastro de Imagens</h1><br />
                <div class="input-group mb-3">
                    <div class="custom-file">
                        <input
                            type="file"
                            class="custom-file-input"
                            id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01"
                            accept="image/png, image/jpeg"
                            onChange={(e) => this._handleImageChange(e)} />
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div>

                {$imagePreview}

                <button className="btn btn-dark mt-2" onClick={this.enviaDados}>Upload</button>
            </div>
        )
    }
}

export default CadastroImagem;