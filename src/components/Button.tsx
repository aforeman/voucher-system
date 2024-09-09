import styled from 'styled-components';

const ButtonStyled = styled.button<{ textcolor: string }>`
	margin: 0;
	padding: 0;
	border: none;
	cursor: pointer;
	&.textVariant {
		background-color: transparent;
	}
	&.AVariant,
	&.BVariant {
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 14px;
		padding-right: 14px;
		font-size: 12px;
		font-weight: bold;
		border-radius: 6px;
	}
	&.AVariant {
		background-color: #26272f;
	}
	&.BVariant {
		background-color: #bbf247;
		color: #13181b;
	}
	color: ${({textcolor = '#cfd1e2'}) => textcolor};
`;

const Button = ({name, variant, onClick, color}) => {
	return <ButtonStyled className={`${variant}Variant`} onClick={onClick} textcolor={color}>{name}</ButtonStyled>;
};

export default Button;
