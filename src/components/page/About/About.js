import React from 'react';
import Title from '../Title';
import '../style/AboutMe.css'
import Introduce from '../Introduce';

const About = () => {
	return (
		<div className='AboutMe'>
			<div className='inner'>
				<Title title={"김수민 | About Me"}/>
				<div className='content'>
					<div className='imgDiv'>
						<img src='./main_img.jpg' alt=''/>
					</div>
					<div className='comment-top'>
						<b>Contact</b>
							<div className='Acomment'>
								<p>Email</p>
								<a href='/'>sumin006@naver.com</a>
							</div>
							<div className='Acomment'>
								<p>Phone</p>
								<a href='/'>010-4188-1955</a>
							</div>
					</div>
					<div className='comment-bottom'>
						<b>LINK</b>
							<div className='Acomment'>
								<p>Blog</p>
								<a href='https://velog.io/@sumin0gig'>https://velog.io/@sumin0gig</a>
							</div>
							<div className='Acomment'>
								<p>Git Hub</p>
								<a href='https://github.com/sumin0gig'>https://github.com/sumin0gig</a>
							</div>
					</div>
				</div>
				<div className='language'>
					<Introduce introduce={"사용 언어"}/>
					<div className='introduce-collection'>
						<div className="introduce">JavaScript</div>
						<div className="introduce">Canvas</div>
						<div className="introduce">TypeScript</div>
						<div className="introduce">React</div>
						<div className="introduce">Redux</div>
						<br/>
						<div className="introduce">HTML</div>
						<div className="introduce">CSS</div>
						<div className="introduce">SCSS</div>
						<div className="introduce">정규표현식</div>
						<br/>
						<div className="introduce">Git</div>
						<div className="introduce">GitHub</div>
						<div className="introduce">PHP</div>
						<div className="introduce">MySQL</div>
						<div className="introduce">NodeJS</div>
					</div>
				</div>
				<Introduce introduce={"자기소개"}/>
				<div className='introduce-collection'>
					<div className="introduce">
						개발이 아닌 사용으로 시작한 개발자, 김수민입니다.
					</div>
					<div className='introduce'>
						경영학과를 나와 여러 사이트를 이용하며 다양한 사이트의 개발 및 사용자 편의 개선에 흥미를 가지게 되었습니다.
					</div>
					<div className='introduce'>
						글쓰는게 제일 어렵다 제일 어려워 기다려봐바
					</div>
				</div>
			</div>
		</div>

	);
};

export default About;