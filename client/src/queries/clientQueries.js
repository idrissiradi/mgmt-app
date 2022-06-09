import { gql } from '@apollo/client';

const GET_CLIENTS = gql`
	query getClients {
		clients {
			id
			email
			name
			phone
		}
	}
`;

export { GET_CLIENTS };
