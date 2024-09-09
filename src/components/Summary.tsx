import styled from 'styled-components';

import Button from './Button';

import close from '../assets/Close.svg';

const SummaryStyled = styled.div`
	padding-top: 22px;
	padding-bottom: 22px;
	padding-left: 24px;
	padding-right: 24px;
`;

const Membership = styled.div`
	margin-top: 22px;
	padding-left: 20px;
	padding-right: 20px;
	border: 1px solid #363843;
	border-radius: 12px;

	> .item {
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		color: #cfd1e2;
		&.ruleBelow {
			border-bottom: 1px solid #363843;
		}
	}
`;

const Heading = styled.div`
	color: #f9f9f9;
	margin-top: 21px;
	padding-bottom: 14px;
	font-size: 24px;
	text-align: left;
	border-bottom: 1px solid #363843;
`;

const Location = styled.div`
	margin-top: 18px;
	text-align: left;
	font-size: 16px;
	color: #cfd1e2;
`;

const Address = styled.div`
	margin-top: 3px;
	margin-bottom: 13px;
	padding-bottom: 17px;
	text-align: left;
	font-size: 12px;
	color: #9a9cae;
	letter-spacing: -0.1px;
	border-bottom: 1px solid #363843;
`;

const Item = styled.div`
`;

const ItemMemPlan = styled.div`
`;

const ItemMemAmnt = styled.div`
	margin-top: 15px;
	padding-bottom: 13px;
`;

const ItemFirstDD = styled.div`
	margin-top: 26px;
	padding-bottom: 12px;
`;

const ItemJoinFee = styled.div`
	margin-top: 14px;
`;

const ItemActFee = styled.div`
	margin-top: 8px;
`;

const ItemPassFee = styled.div`
	margin-top: 10px;
	padding-bottom: 12px;
`;

const Subheading = styled.div`
	margin-top: 12px;
	text-align: left;
	font-size: 12px;
	color: #cfd1e2;
`;

const TotalCost = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
	margin-bottom: 36px;
	color: #cfd1e2;
`;

const PromoCodeBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 14px;
	> div:first-child {
		margin-top: 19px;
		color: #cfd1e2;
		font-size: 12px;
	}
`;

const PromoCode = styled.div`
	padding: 10px;
	text-align: left;
	border: 1px solid #309c61;
	border-radius: 8px;
	> div {
		float: left;
	}
`;

const Code = styled.div`
	font-size: 14px;
	color: #50cd89;
`;

const Discount = styled.div`
	margin-top: 2px;
	font-size: 12px;
	color: #cfd1e2;
`;

const Total = styled.div`
	font-size: 20px;
	color: #bbf247;
`;

const ActionButtons = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 40px;
	> button {
		min-width: 120px;
		height: 42px;
		margin-left: 12px;
		font-size: 14px !important;
	}
`;

const CloseButton = styled.div`
	cursor: pointer;
	width: 16px;
	height: 16px;
	margin-left: 18px;
	margin-top: 8px;
	margin-right: 2px;
`;

const Summary = ({code, callbackClose, callbackApply}) => {
	const handleCodeClose = () => {
		callbackClose();
	};

	return <SummaryStyled>
		<Membership>
			<Heading>YOUR MEMBERSHIP</Heading>
			<Location>TUGGERANONG, ACT</Location>
			<Address>Upper level, shop 10 South Point. Tuggeranong ACT 2900</Address>
			<ItemMemPlan className="item"><div>Membership plan</div><div>Your plan DD</div></ItemMemPlan>
			<ItemMemAmnt className="item ruleBelow"><div>Membership amount</div><div>$100.00</div></ItemMemAmnt>

			<PromoCodeBox>
				<div>Promo code</div>
				<PromoCode>
					<div>
						<Code>{code} applied</Code>
						<Discount>20% Off</Discount>
					</div>
					<CloseButton onClick={handleCodeClose}>
						<img src={close} alt="Close button" />
					</CloseButton>
				</PromoCode>
			</PromoCodeBox>

			<ItemFirstDD className="item ruleBelow"><div>First direct debit</div><div>30/07/2024</div></ItemFirstDD>
			<Subheading>Discounted price after applying voucher</Subheading>
			<ItemJoinFee className="item"><div>Joining fee</div><div>$0.00</div></ItemJoinFee>
			<ItemActFee className="item"><div>Activation fee</div><div>$0.00</div></ItemActFee>
			<ItemPassFee className="item ruleBelow"><div>Pass fee</div><div>$0.00</div></ItemPassFee>
			<TotalCost><div>Cost per fortnight</div><Total>$80.00</Total></TotalCost>
		</Membership>
		<ActionButtons>
			<Button variant="A" name="CLOSE" onClick={callbackClose} />
			<Button variant="B" name="APPLY" onClick={callbackApply} />
		</ActionButtons>
	</SummaryStyled>;
};

export default Summary;
