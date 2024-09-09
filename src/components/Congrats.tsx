import styled from 'styled-components';

import Button from './Button';
import ModalBG from './ModalBG';

import tick from '../assets/tick-circle.svg';
import close from '../assets/Close.svg';

const CongratsStyled = styled.div`
	position: relative;
	min-width: 400px;
	min-height: 330px;
	background-color: #15171c;
	box-shadow: 0px 6px 20px 0px #0000001a;
	border-radius: 12px;
`;

const IconContainer = styled.div`
	margin-top: 42px;
	margin-bottom: 28px;
`;

const Title = styled.div`
	font-size: 20px;
	color: #f9f9f9;
`;

const Body = styled.div`
	color: #cfd1e2;
	margin-top: 11px;
	margin-bottom: 10px;
	font-size: 14px;
`;

const ActionButtons = styled.div`
	padding-top: 33px;
	padding-bottom: 30px;
	> button {
		height: 44px;
		min-width: 120px;
	}
`;

const CloseButton = styled.div`
	position: absolute;
	cursor: pointer;
	width: 16px;
	height: 16px;
	top: 20px;
	right: 20px;
	> img {
		translate(-2px, -1px);
	}
`;

const Congrats = ({handleClose}) => {
	return <ModalBG>
		<CongratsStyled>
			<CloseButton onClick={handleClose}>
				<img src={close} alt="Close button" />
			</CloseButton>
			<IconContainer><img src={tick} alt="" /></IconContainer>
			<Title>Congratulations!</Title>
			<Body>The voucher has been applied successfully.</Body>
			<ActionButtons><Button name="CLOSE" variant="A" onClick={handleClose} /></ActionButtons>
		</CongratsStyled>
		</ModalBG>;
};

export default Congrats;
