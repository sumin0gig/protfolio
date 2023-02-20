import React from 'react';
import '../style/Home.css'
import Title from '../Title';
import Comment from '../Comment';
import PortfolioList from './PortfolioList';

const onMouseEnter1=()=>{
	document.querySelector(".bannerOne").className="banner bannerOne gif"
}
const onMouseLeave1=()=>{
	document.querySelector(".bannerOne").className="banner bannerOne"
}
const onMouseEnter2=()=>{
	document.querySelector(".bannerTwo").className="banner bannerTwo gif"
}
const onMouseLeave2=()=>{
	document.querySelector(".bannerTwo").className="banner bannerTwo"
}

const Home = () => {
	return (
		<div>
			<div className='main'>
				<div className='inner'>
					<Title title={"김수민"}/>
					<Comment comment='끊임 없이 공부하는 개발자'/>
					<div className='bannerCollection'>
						<div className='banner bannerOne'></div>
						<div className='banner bannerTwo'></div>
						<div className='banner bannerThree'></div>
					</div>
					<div className='commentBox'>
						<div className='hello'>안녕하세요. 웹 프론트엔드 개발자
							<div className='gifbtn' onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}> 김수민</div>
							입니다.</div>
						<div className='hello'>
							<div className='gifbtn' onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>기록하는 습관</div>을 기반으로 <div className='gifbtn'>사용자 중심</div>의 사이트를 개발하고자 합니다.
						</div>
					</div>
				</div>
				
			</div>

			<div className='main'>
				<PortfolioList title={"가계부"}/>
				<PortfolioList title={"쇼핑몰"}/>
				<PortfolioList title={"??"}/>
			</div>
			
		</div>
	);
};

export default Home;