import styled from 'styled-components';

const RuleStyled = styled.div`
	position: relative;
	width: calc(100% - 44px);
	height: 1px;
	margin-left: auto;
	margin-right: auto;
	border-bottom: 1px solid #636674;
	> span {
		top: -5px;
		left: calc(50% - 18px);
		width: 36px;
		display: inline-block;
		color: #636674;
		background-color: #15171c;
		font-size: 12px;
		position: absolute;
	}
`;

const Rule = ({label}) => {
	return <RuleStyled><span>{label}</span></RuleStyled>;
};

export default Rule;
