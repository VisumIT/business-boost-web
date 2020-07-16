import React, { Component } from 'react'
import Api from '../../axios/api'

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
        const id = this.props.match.params.id
        await Api.post('/company/15/products/' + id + "/upload", dados)
        this.props.history.push('/user/products')
    }

    render() {

        let { imagePreview } = this.state;
        let $imagePreview = null;
        if (imagePreview !== '') {
            $imagePreview = (
                <div className="container" style={{height: 250, width: 250}}>
                    <img className="border rounded mx-auto" style={{height: 250, width: 250}} src={imagePreview} alt={"Pre-visualizacao"} />
                </div>);
        } else {
            $imagePreview = (<div className="container border" style={{height: 250, width: 280}}></div>);
        }

        return (
            <div className="container">
                <h1 className="mx-auto">Cadastro de Imagens</h1><br />
                <input
                    type="file"
                    placeholder="Escolher foto"
                    accept="image/png, image/jpeg"
                    onChange={(e) => this._handleImageChange(e)} />

                {$imagePreview}

                <button className="mt-2" onClick={this.enviaDados}>Upload</button>
            </div>
        )
    }
}

export default CadastroImagem;