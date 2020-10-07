import React from 'react';

import './styles.css';

export interface IdeaProps{
	title: string;
	category: string;
	description: string;
	url: string;
	image: string;
}

const IdeaBlock : React.FC<IdeaProps> = (props) => {
	return(
		<div className="idea">	
				<img src={props.image}
					 	 alt={props.title}></img>
				<div className="content-idea">			
				<h1>{props.title}</h1>
				<h2>{props.category}</h2>
				<div className="content-text-idea">
					<p>			
						{props.description}			   
					</p>
				</div>
				<a href={props.url}>Ir para ideia</a>				
				</div>
	  </div>
	);
}
export default IdeaBlock;