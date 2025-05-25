// Define the state shape
export interface IVisibilityState {
  descriptionVisible: boolean;
  featuresVisible: boolean;
  specsVisible: boolean;
}

// Define action types
export type IVisibilityAction =
  | { type: "TOGGLE_DESCRIPTION" }
  | { type: "TOGGLE_FEATURES" }
  | { type: "TOGGLE_SPECS" }
  | { type: "TOGGLE_SECTION"; section: keyof IVisibilityState };

// Initial state
export const initialState: IVisibilityState = {
  descriptionVisible: true,
  featuresVisible: false,
  specsVisible: false,
};

// Reducer function
export const visibilityReducer = (
  state: IVisibilityState,
  action: IVisibilityAction
): IVisibilityState => {
  switch (action.type) {
    case "TOGGLE_DESCRIPTION":
      return { ...state, descriptionVisible: !state.descriptionVisible };
    case "TOGGLE_FEATURES":
      return { ...state, featuresVisible: !state.featuresVisible };
    case "TOGGLE_SPECS":
      return { ...state, specsVisible: !state.specsVisible };
    case "TOGGLE_SECTION":
      return { ...state, [action.section]: !state[action.section] };
    default:
      return state;
  }
};
