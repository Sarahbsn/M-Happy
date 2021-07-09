import styled from "styled-components";

export const MainContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: whitesmoke;
`;

export const ListContainer = styled.div`
	border: 1px solid #afafae;
	overflow: scroll;
	margin-bottom: 3rem;
	height: 15rem;
	width: 35rem;
	text-align: center;
	border-radius: 1rem;
	padding: 1rem;
`;

export const SearchBarContainer = styled.div`
	padding: 5rem;
	display: flex;
	justify-content: center;
`;

export const ListTitle = styled.h3`
	color: #ee6761;
	text-align: center;
	padding-bottom: 1rem;
	font-size: 1.4rem;
`;

export const ItemWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
