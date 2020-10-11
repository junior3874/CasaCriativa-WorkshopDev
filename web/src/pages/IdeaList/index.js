import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import IdeaBlock from '../../components/IdeaBlock';
import FormModal from '../../components/FormModal';

import logoImg from '../../assets/images/logo.png';
import './styles.css';


function IdeaList(){
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [ideias, setIdeias] = useState([]);
	function handleActiveModal(){
		setIsModalVisible(!isModalVisible);
	}
	
	useEffect(() => {
		api.get('ideias').then(res => {
			setIdeias(res.data);
		})
	}, []);
	

	return(
		<div className="page-ideia-list">
			{isModalVisible ? <FormModal onClose={() => {
				setIsModalVisible(false);
			}}/> : console.log('do wanna know')}
			<header>
				<img src={logoImg} alt=""/>
				<aside>
					<Link to='/'>Inicio</Link>
					<button onClick={handleActiveModal}>Adicionar ideia</button>
				</aside>

			</header>
			<section>
				<h1>
					Em exibição <br/>
					<strong>ideias</strong>
				</h1>
			</section>
			<main>
				{ideias.map(ideia => {
					
					return <IdeaBlock title={ideia.title} category={ideia.category} description={ideia.description} url={ideia.url} image={ideia.image} />
				})}
			</main>
			<footer>
			<span>With </span> ☕ <a href="http://rocketseat.com.br" target="_blank">Wellington</a>
			</footer>
		</div>
	);
};

export default IdeaList;