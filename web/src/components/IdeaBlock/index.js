import React from 'react';
import './styles.css';


function IdeaBlock(props){

	const image = require(props.image);
	return(
		<div className="idea">	
				<img src={image}
					 alt={props.title}/>
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