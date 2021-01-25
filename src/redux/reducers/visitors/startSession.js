const initialState = {
  success: false,
  error: false,
  pending: false,
  message: '',
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'START_SESSION_PENDING': {
      return {
        ...state,
        success: false,
        error: false,
        pending: true,
        message: 'Writing logs...',
      };
    }
    case 'START_SESSION_REJECTED': {
      return {
        ...state,
        success: false,
        error: true,
        pending: false,
        message: action.payload.response.data.message,
      };
    }
    case 'START_SESSION_FULFILLED': {
      return {
        ...state,
        success: true,
        error: false,
        pending: false,
        message: 'Logs written successfully',
        data: action.payload.data.result,
      };
    }
  }
};
