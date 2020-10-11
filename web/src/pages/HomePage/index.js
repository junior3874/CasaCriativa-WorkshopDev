import React, {useState} from 'react';
import FormModal from '../../components/FormModal';
import LogoImg from '../../assets/images/logo.png';

import './styles.css';

function HomePage(){
	const [isModalVisible, setIsModalVisible] = useState(false);

	function handleActiveModal(){
		setIsModalVisible(!isModalVisible);
		
	}

	return(
		<div className="page-home">
			{isModalVisible ? <FormModal onClose={() => {			
				setIsModalVisible(false);
				
			}}/> : console.log('do wanna know')}

			<header>
				<img src={LogoImg} alt="CasaCriativa, ideias para a crise"/>
			</header>
			<main>
				<section>
				<article>
					<p>
						Ficar em casa em períodos longos não deve ser nada fácil.
					</p>
					<p>
						Por isso, iremos catalogar <strong>ideias, brincadeiras, jogos, filmes, livros, cursos, dicas</strong>
						e tudo que for necessário para tornar esse momento mais interessante
					</p>
					<p>
						Comece clicando em ver ideias para ver as ideias cadastradas e contribuia adicionando a sua ideia.
					</p>
				</article>
				<aside>
					<div className="button-area">
						<button type="button" id="add-ideia" onClick={handleActiveModal}>+ Adicionar ideia</button>
						<button id="view-ideia">Ver ideias</button>
					</div>
					<span>Com amor, <a href="https://rocketseat.com.br/">Rocketseat</a></span>					
				</aside>
				</section>
			</main>
			<footer>			
						
			</footer>
		</div>
	);
}

export default HomePage;