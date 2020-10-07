import React, { FormEvent, useRef } from 'react';
import {useHistory} from 'react-router-dom';

import api from '../../services/api';

import './styles.css'

interface FormModalProps{
	onClose: Function;
}

const FormModal : React.FC<FormModalProps> = ({ onClose }) =>{
	const inputTitle = useRef<HTMLInputElement>(null);
	const inputCategory = useRef<HTMLInputElement>(null);
	const inputDescription = useRef<HTMLTextAreaElement>(null);
	const inputUrl = useRef<HTMLInputElement>(null);
	const inputImage = useRef<HTMLInputElement>(null);

	const history = useHistory();

	function handleDesactiveModal(){
		onClose()
	}
	function savePost(url : string, data : Object){
		api.post(url, data).then(() => {
			alert('Ideia criada com sucesso!')
			history.push('/')
		}).catch(() => {
			alert('Erro na criação da ideia')
		})
	}

	function handlePostForm(e : FormEvent){
		e.preventDefault();		
		savePost('idea', getFormValues());
	}

	function getFormValues(){
		const title  = inputTitle.current?.value;
		const category = inputCategory.current?.value;
		const description = inputDescription.current?.value;
		const url = inputUrl.current?.value;
		const image = inputImage.current?.value;

		
		return ({title, category, description, url, image});
	}

	return(
		<div id="modal">
			<div className="content">
				<form onSubmit={handlePostForm}>
					<h1>NOVA IDEIA</h1>
					<div className="field-group">
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
							<label htmlFor="image">Link da imagen</label>
							<input ref={inputImage} type="url" name="image"/>
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