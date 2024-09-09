import styled from 'styled-components';

import Button from './Button';

const VoucherItemStyled = styled.div`
	width: 100%;
	height: 136px;
	padding: 20px;
	margin-bottom: 11px;
	box-sizing: border-box;
	background-color: #15171c;
	border: 1px solid #363843;
	border-radius: 12px;
`;

const VTitle = styled.div`
	text-align: left;
	font-size: 24px;
	color: #f9f9f9;
`;

const VExpiry = styled.div`
	text-align: left;
	font-size: 12px;
	line-height: 30px;
	color: #cfd1e2;
`;

const VCode = styled.div`
	float: left;
	text-align: left;
	color: #cfd1e2;
`;

const CodeButton = styled.div`
	margin-top: 12px;
	text-align: right;
	font-size: 14px;
	> button {
		float: right;
		margin-right: 8px;	
	}
`;

const VoucherItem = ({voucher, callbackClick}) => {
	return <VoucherItemStyled>
		<VTitle>{voucher.title}</VTitle>
		<VExpiry>Expiry:&nbsp;{voucher.expiry}</VExpiry>
		<CodeButton>
			<VCode>{voucher.code}</VCode>
			<Button name="USE THIS VOUCHER" variant="text" onClick={(val) => {callbackClick(val)}} color="#bbf247" />
		</CodeButton>
	</VoucherItemStyled>;
};

export default VoucherItem;
