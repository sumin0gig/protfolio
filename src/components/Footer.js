import React from 'react';
import {BsFillCheckSquareFill,BsGithub} from "react-icons/bs"
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
	return (
		<footer>
				<ul className='footList inner'>
					<li>
						<div className='imgDiv'>						
						<img src='/main_img.jpg' alt=''/>
						</div>
						<div>
						<b>사용자 중심의 사이트 개발을 위해 공부하는 프론트 엔드 개발자</b>
						</div>
					</li>
					<li>
						<ul className='linkLists'>
							<Link to="https://github.com/sumin0gig" target="_blank">
								<li className='linkList github'>
									<BsGithub></BsGithub>
									<p> GITHUB</p>
								</li>
							</Link>
							<Link to="https://velog.io/@sumin0gig" target="_blank">
								<li className='linkList velog'>
									<BsFillCheckSquareFill></BsFillCheckSquareFill>
									<p> VELOG</p>
								</li>
							</Link>
						</ul>
					</li>
				</ul>
		</footer>
	);
};

export default Footer;