import React, { useRef, useState } from 'react';
import {useHistory} from 'react-router-dom';

import Dropzone from '../Dropzone';

import api from '../../services/api';

import './styles.css'


function FormModal({ onClose }){
	const inputTitle = useRef(null);
	const inputCategory = useRef(null);
	const inputDescription = useRef(null);
	const inputUrl = useRef(null);
	const [selectedFile, setSelectedFile] = useState();

	const history = useHistory();

	function handleDesactiveModal(){
		onClose()
	}
	function savePost(url, data){
		api.post(url, data).then(() => {
			alert('Ideia criada com sucesso!')
			history.push('/')
		}).catch((err) => {
			alert('Erro na criação da ideia');
			console.log(err);
		})
	}

	function handlePostForm(e){
		e.preventDefault();	
		savePost('create-ideia', getFormValues());
	}

	function getFormValues(){
		const title  = inputTitle.current.value;
		const category = inputCategory.current.value;
		const description = inputDescription.current.value;
		const url = inputUrl.current.value;

        const data = new FormData();

        data.append('url', url);
        data.append('title', title);
        data.append('category', category);
        data.append('description', description);
        data.append('file', selectedFile);

		return (data);
	}

	return(
		<div id="modal">
			<div className="content">
				<form onSubmit={handlePostForm}>
					<h1>NOVA IDEIA</h1>
					<div className="field-group">
						<div className="field">
						<Dropzone onFileUploaded={setSelectedFile} />
						</div>
						<div className="field">
							<label htmlFor="title">Titulo da ideia</label>
							<input ref={inputTitle} onChange={handlePostForm} type="text" name="title"/>
						</div>
						<div className="field">
							<label htmlFor="category">Categoria</label>
							<input ref={inputCategory} type="text" name="category"/>
						</div>
						<div className="field">
							<label htmlFor="description">Descrição da ideia</label>
							<textarea ref={inputDescription} name="description"/>
						</div>
						<div className="field">
							<label htmlFor="url">Link da ideia</label>
							<input ref={inputUrl} type="url" name="url" />	
						</div>
						<div className="buttons-modal">
							<a onClick={handleDesactiveModal}>Voltar</a>
							<button type="submit">Salvar</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default FormModal;