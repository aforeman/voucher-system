import styled from 'styled-components';

const StyledHeader = styled.header`
	width: 100%;
	height: 48px;
	background-color: #15171c;
	box-shadow: 0px 3px 4px 0px #0000000d;
	span {
		color: #cfd1e2;
		font-size: 16px;
		line-height: 48px;
	}
`;

const Header = ({title}) => {
	return <StyledHeader>
		<span>{title}</span>
	</StyledHeader>;
};

export default Header;
