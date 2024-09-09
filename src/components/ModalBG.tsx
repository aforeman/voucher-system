import styled from 'styled-components';

const StyledModalBG = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	> div {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const ModalBG = ({children}) => {
	return <StyledModalBG>
		<div>
			{children}
		</div>
	</StyledModalBG>;
};

export default ModalBG;
