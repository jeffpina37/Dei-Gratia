import { inventoryData } from '../../data';
import { selectSearchTerm } from '../../features/searchTerm/searchTermSlice';


export const loadData = (data) => {
    return {
        type: 'inventory/loadData',
        payload: inventoryData,
    }
};

const initialInventory = [];
export const inventoryReducer = (inventory = initialInventory, action) => {
    switch (action.type) {
        case 'inventory/loadData': {
            return action.payload;
        }
        default: {
            return inventory;
        }
    }
};

export const selectInventory = state => state.inventory;

export const selectFilteredInventory = state => {
    const inventory = selectInventory(state);
    const searchTerm = selectSearchTerm(state);

    return inventory.filter((stock) => stock.name.toLowerCase().includes(searchTerm.toLowerCase()));
}