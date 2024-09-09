import { useState } from 'react';
import styled from 'styled-components';

import ModalBG from './ModalBG';
import Button from './Button';
import Rule from './Rule';
import VoucherItem from './VoucherItem';
import Summary from './Summary';

import close from '../assets/Close.svg';

const VoucherModalStyled = styled.div`
	width: 600px;
	box-sizing: border-box;
	min-height: 598px;
	background-color: #15171c;
	border-radius: 12px;
`;

const TitleSection = styled.div`
	position: relative;
	margin-top: 22px;
	padding-bottom: 21px;
	padding-left: 22px;
	padding-right: 22px;
	font-size: 20px;
	color: #f9f9f9;
	text-align: left;
	border-bottom: 1px solid #363843;
`;

const VoucherCodeEntry = styled.div`
	padding-left: 22px;
	padding-right: 22px;
	padding-bottom: 29px;
	overflow: hidden;
	> label {
		float: left;
		margin-top: 47px;
		color: #cfd1e2;
		font-size: 14px;
	}
	> input {
		height: 42px;
		min-width: 413px;
		margin-top: 6px;
		padding-left: 13px;
		padding-right: 13px;
		box-sizing: border-box;
		clear: left;
		float: left;
		background-color: #26272f;
		border: 0;
		font-size: 16px;
		color: #50cd89;
	}
	> button {
		float: right;
		height: 42px;
		margin-top: 6px;
		margin-right: 1px;
		min-width: 120px;
		font-size: 14px !important;
		line-height: 25px;
	}
`;

const VHeading = styled.div`
	margin-top: 32px;
	margin-bottom: 11px;
	text-align: left;
	color: #cfd1e2;
	font-size: 14px;
`;

const VoucherList = styled.div`
	padding-left: 22px;
	padding-right: 22px;
`;

const CloseButton = styled.div`
	position: absolute;
	cursor: pointer;
	width: 16px;
	height: 16px;
	top: -1px;
	right: 29px;
	> img {
		scale: 0.9;
		translate(-2px, -1px);
	}
`;

const VoucherModal = ({title, vouchers, handleClose, handleApply}) => {
	const [voucherCode, setVoucherCode] = useState('');
	const [summaryVisible, setSummaryVisible] = useState(false);

	const handleVoucherClick = (code) => {
		setVoucherCode(code);
	};

	return <ModalBG>
		<VoucherModalStyled>
			<TitleSection>
				<span>{title}</span>
				<CloseButton onClick={handleClose}>
					<img src={close} alt="Close button" />
				</CloseButton>
			</TitleSection>
			{!summaryVisible && <>
				<VoucherCodeEntry>
					<label htmlFor="codeField">Do you have a voucher code?</label>
					<input name="codeField" value={voucherCode} onChange={handleVoucherClick} placeholder="Enter your voucher code here" />
					<Button name="APPLY" variant="A" onClick={() => {setSummaryVisible(true);}} color="#cfd1e2" />
				</VoucherCodeEntry>
				<Rule label="or" />
				<VoucherList>
					<VHeading>
						Your available vouchers
					</VHeading>
					<div>
						{vouchers.map((voucher) => <VoucherItem key={`voucherCode_${voucher.code}`} voucher={voucher} callbackClick={() => {handleVoucherClick(voucher.code);}} />)}
					</div>
				</VoucherList>
			</>}
			{summaryVisible && <Summary code="GTYUHF258" callbackClose={handleClose} callbackApply={handleApply} />}
		</VoucherModalStyled>
	</ModalBG>;
};

export default VoucherModal;
