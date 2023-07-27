// import {
//   LIST_UPDATE_DATA,
//   UPDATE_ITEM_DATA,
//   DELETE_ITEM_DATA,
// } from '../../action-types/list';
import {RESET_REDUCER} from '../../action-types/common';

const INITIAL_STATE = {
  data: [],
};

const ListEntityReducer = (
  state = INITIAL_STATE,
  action: IAction,
): allAnyTypes => {
  switch (action.type) {
    // case LIST_UPDATE_DATA: {
    //   const newData = {
    //     id: action?.payload?.id,
    //     name: action?.payload?.name,
    //     status: action?.payload?.status,
    //     category: action?.payload?.category,
    //     description: action?.payload?.des,
    //     date: action?.payload?.date,
    //   };
    //   return {
    //     ...state,
    //     data: [...state.data, newData],
    //   };
    // }
    // case UPDATE_ITEM_DATA: {
    //   const {id, status} = action.payload;
    //   const updatedData = state.data.map((record: any) =>
    //     record.id === id
    //       ? Object.assign({}, record, {status: !status})
    //       : record,
    //   );

    //   return Object.assign({}, state, {data: updatedData});
    // }
    // case DELETE_ITEM_DATA: {
    //   const {id} = action.payload;

    //   const updatedData = state.data.filter((record: any) => record.id !== id);

    //   return {...state, data: updatedData};
    // }
    case RESET_REDUCER: {
      return {
        ...INITIAL_STATE,
      };
    }

    default:
      return state;
  }
};

export {ListEntityReducer};
