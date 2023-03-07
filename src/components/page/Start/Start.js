import React, { useState } from 'react';
import SketchExample from './sketchExample';
import '../style/Start.css'

const Start = () => {
	const[name,setName]=useState("")
	const onChange=(e)=>{
		setName(e.target.value)
	}
	return (
		<div className='start'>
			<div className='start-quset'>
				<h1>안녕하세요 <input name='name' onChange={onChange} maxLength={10}/> 님</h1>
				<div className={name?'text-animation':''}>
					<h1>{name?name+'님께서 가장 좋아하는 색상은 무엇인가요?':""}</h1>
				</div>
			</div>
			<div className={name?'color-animation':''}>
				{name?<SketchExample/>:null}			
			</div>
		</div>
	);
};

export default Start;