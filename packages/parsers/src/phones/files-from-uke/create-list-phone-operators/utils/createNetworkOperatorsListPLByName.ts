import type {NetworkOperatorsListPLByID, NetworkOperatorsListPLByName} from "../../types";

export function createNetworkOperatorsListPLByName(networkOperatorsListPLByID: NetworkOperatorsListPLByID): NetworkOperatorsListPLByName {
		return Object.keys(networkOperatorsListPLByID).reduce((acc, operatorID) => {
				let operator = networkOperatorsListPLByID[operatorID];
				if (operator.name) {
						acc[operator.name] = { id: operatorID, createdAt: new Date().toISOString() };
				}
				return acc;
		}, {} as NetworkOperatorsListPLByName);
}