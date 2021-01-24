const initialState = {
  success: false,
  error: false,
  pending: false,
  categoryData: {},
  products: [],
  pageInfo: {},
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'GET_CATEGORY_DETAIL_PENDING': {
      return {
        ...state,
        success: false,
        error: false,
        pending: true,
        message: 'Memanggil data...',
      };
    }
    case 'GET_CATEGORY_DETAIL_REJECTED': {
      return {
        ...state,
        success: false,
        error: false,
        pending: false,
        message: 'Pengambilan data gagal, silahkan muat ulang halaman',
      };
    }
    case 'GET_CATEGORY_DETAIL_FULFILLED': {
      return {
        ...state,
        success: true,
        error: false,
        pending: false,
        pageInfo: action.payload.data.pageInfo,
        categoryData: action.payload.data.category,
        products: action.payload.data.products,
        message: 'Pengambilan data sukses!',
      };
    }
  }
};
