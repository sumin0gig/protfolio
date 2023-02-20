import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioList = ({title}) => {
	let textarea;
	let thumbImg;
	let windowImg;
	let mediaImg;
	let link;
	switch (title) {
		case '가계부':
			textarea="사용자가 직접 버튼을 등록, 수정, 삭제할 수 있게 만든 복식부기 형태의 가계부로써 사용자가 입력한 값을 기반으로 하여 재무상태표 및 손익계산서를 작성해주는 사이트"
			thumbImg="./banner1.jpg";
			windowImg="./banner1.jpg";
			mediaImg="./banner1.jpg";
			link="/portfolio/1";
			break;
		case '쇼핑몰':
			textarea="사이트"
			thumbImg="./banner1.jpg";
			windowImg="";
			mediaImg="";
			link="/";
			break;
		case '??':
			textarea="사이트"
			thumbImg="./banner1.jpg";
			windowImg="";
			mediaImg="";
			link="/";
			break;
		default:
			break;
	}
	return (
		<div className='portfolio'>
				<div className='portfolio-left'>
					<Link to={link}>
						<div className='thumbImg'>
							<img src={thumbImg} alt=''/>
						</div>
						<div className='titleH3'><h3>{title}</h3></div>
						<div className='textarea'>{textarea}</div>
					</Link>
				</div>
			<div className='portfolio-right'>
				<div className='windowImg'>
					<img src={windowImg} alt=''/>
				</div>
				<div className='mediaImg'>
					<img src={mediaImg} alt=''/>
				</div>
			</div>
		</div>
	);
};

export default PortfolioList;