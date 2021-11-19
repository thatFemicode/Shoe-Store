import { OPEN_MODAL, CLOSE_MODAL } from "../constant/actionTypes";
// import sublinks from "../../data";
export default (
  state = { isOpen: false, isSubMenuOpen: false, isSideBarOpen: false },
  action
) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isOpen: true };
    case CLOSE_MODAL:
      return { ...state, isOpen: false };

    default:
      return state;
  }
};
