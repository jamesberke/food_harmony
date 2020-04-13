import React from "react";
import "./aboutus.css"
import { Icon, InlineIcon } from '@iconify/react';
import githubIcon from '@iconify/icons-logos/github-icon';  
import angellistIcon from '@iconify/icons-logos/angellist';  
import linkedinIcon from '@iconify/icons-logos/linkedin';   

class AboutUs extends React.Component {
	
	render() {
		return (
           
            <div className="splash-brothers">
                <div className="about_us">About Us</div>
                <div className="ourteaminfo"><h2>Our Team</h2>

					<p>Food Harmony is a single page app designed to simplify how you choose what to eat.It will be built using the popular MERN stack. This stands for MongoDB, Express, React, Node.js.The main challenges facing us as a group is figuring out the best way to use the APIs we need and how to format that data as it comes in. We are working in all web disciplines and in nearly every major timezone. 
					Our "all-hands" team calls are usually pretty fun: some are just starting.</p>
				</div>

				<div className="four">
					<div className="member1">
						
						<div className="member_img1">
							<img src="https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/438/medium/Harsha_Venkatesh.jpg"/>
							<a  className='name'>Hersha Venkatesh</a>
							<a  className='position'>Hersha Venkatesh is a professional fullstack engineer. For FoodHarmony he created geo location queries using MongoDB to search for restaurants and menu items close to a user's location. Additionally contributed to frontend presentation of menu items, and frontend-backend integration.</a>
						</div>
						<a href='https://github.com/greathmaster' 
							className='github'>
 							<div className='github-text'><Icon icon={githubIcon} /></div>
							
						</a>
						<a href='https://www.linkedin.com/in/hersha-venkatesh-19500b61/' 
							className='linkedin'>
 							<div className='linkedin-text'><Icon icon={linkedinIcon} /></div>
						</a>

						<a href='https://angel.co/u/hersha-venkatesh' 
							className='angellisticon'>
							<div className='angelli'><Icon icon={angellistIcon} /></div>

						</a>
						
					</div>
					<div className="member2">
						<div className="member_img1">
							<img src="https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/428/medium/James_Berke_2.jpg"/>
							<a  className='name'>James Berke</a>
							<a  className='position'>Front-end engineer responsible for building out all of the React components. Designed and implemented UI/UX for splash page, login, signup, home page, navbar, and restaurant show modal. Collaborated to modify and connect the flow of information from MongoDB to be rendered in the browser. Tasked with leading the project and managing workflow.</a>
						</div>
						<a href='https://github.com/jamesberke/food_harmony'
						className='github'>
 							<div className='github-text'><Icon icon={githubIcon} /></div>
						</a>
						<a href='https://www.linkedin.com/in/james-berke-33912718a/' 
							className='linkedin'>
							<div className='linkedin-text'><Icon icon={linkedinIcon} /></div>
						</a>

						<a href='https://angel.co/u/james-berke' 
							className='angellisticon'>
							<div className='angelli'><Icon icon={angellistIcon} /></div>
						</a>
					</div>
					<div className="member3">
						<div className="member_img1">
							<img src="https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/419/medium/Wenbin_Cao_3.jpg"/>
							<a  className='name'>Steve Cao</a>
							<a  className='position'>Steve Cao is a professional fullstack engineer. Mainly focus on the frontend for the FoodHarmony project, built the ‘aboutus’ component on the frontend. Working on the react infinite scroll functionality, help seeding the database.</a>
						</div>
						<a href='https://github.com/Steve530' 
							className='github'>
							<div className='github-text'><Icon icon={githubIcon} /></div>
						</a>
						<a href='https://www.linkedin.com/in/steve-cao-8807b11a4/' 
							className='linkedin'>
							<div className='linkedin-text'><Icon icon={linkedinIcon} /></div>
						</a>

						<a href='https://angel.co/steve-cao-4' 
							className='angellisticon'>
							<div className='angelli'><Icon icon={angellistIcon} /></div>

						</a>
					</div>
					
					<div className="member4">
						<div className="member_img1">
							<img src="https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/423/medium/Nicholas_Cheung.jpg"/>
							<a  className='name'>Nicholas Cheung</a>
							<a  className='position'>Nicholas Cheung is a professional fullstack engineer.Assisted Harsha in building out back end collections in Restaurants and Foods collections. Researched and integrated Amazon AWS API for file/photo uploads via “POST” routes.</a>
						</div>
						<a href='https://github.com/cowfish813' 
							className='github'>
							<div className='github-text'><Icon icon={githubIcon} /></div>
						</a>
						<a href='https://www.linkedin.com/in/nicholas-cheung-6a72999' 
							className='linkedin'>
 							<div className='linkedin-text'><Icon icon={linkedinIcon} /></div>
						</a>

						<a href='https://angel.co/u/nicholas-cheung-4' 
							className='angellisticon'>
							<div className='angelli'><Icon icon={angellistIcon} /></div>

						</a>

					</div>
				</div>

            </div>
                

           


		);
	}
}

export default AboutUs;
