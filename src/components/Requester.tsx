import styled from 'styled-components';

import ModalBG from './ModalBG';
import Button from './Button';

const StyledRequester = styled.div`
	min-width: 287px;
	min-height: 184px;
	background-color: #15171c;
	box-shadow: 0px 6px 20px 0px #0000001a;
	border-radius: 12px;
`;

const Title = styled.div`
	margin-top: 24px;
	margin-bottom: 22px;
	padding-bottom: 24px;
	font-size: 18px;
	color: #f9f9f9;
	border-bottom: 1px solid #26272f;
`;

const Message = styled.div`
	font-size: 14px;
	color: #9a9cae;
`;

const Action = styled.div`
	margin-top: 22px;
`;

const Requester = ({title, message, buttonText, callbackClick}) => {
	return <ModalBG>
		<StyledRequester>
			<Title>{title}</Title>
			<Message>{message}</Message>
			<Action>
				<Button name="APPLY VOUCHER" variant="A" onClick={callbackClick} color="#cfd1e2" />
			</Action>
		</StyledRequester>
	</ModalBG>;
};

export default Requester;
