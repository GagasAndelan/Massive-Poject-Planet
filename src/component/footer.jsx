// Filename - components/Footer.js

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<h1
				style={{
					color: "green",
					textAlign: "center",
					marginTop: "10px",
				}}
			>
			</h1>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>MEMBERSHIP</Heading>
						<FooterLink href="#">
							Join
						</FooterLink>
						<FooterLink href="#">
							Personal Training
						</FooterLink>
						<FooterLink href="#">
							FAQs
						</FooterLink>
					</Column>
					<Column>
						<Heading>CLASSES</Heading>
						<FooterLink href="#">
							Classes
						</FooterLink>
					</Column>
					<Column>
						<Heading>Get In Touch</Heading>
						<FooterLink href="#">
							Contact Us
						</FooterLink>
					</Column>
					<Column>
						<Heading>FIND US ON</Heading>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>Youtube
								</span>
							</i>
						</FooterLink>
					</Column>
					<Column>
						<Heading>LOGO</Heading>
						<FooterLink href="#">
						<img src='./img/logo.png' className="logofooter"></img>
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Footer;
