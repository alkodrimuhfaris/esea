/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {Container, Button, Spinner} from 'reactstrap';
import {
  WidgetsOutlined,
  LocalMallOutlined,
  StoreMallDirectoryOutlined,
} from '@material-ui/icons';
import {useSelector, useDispatch} from 'react-redux';
import 'react-multi-carousel/lib/styles.css';
import actions from '../../../redux/actions/index';
import TitleBox from '../../ComponentHelpers/TitleBox';
import Description from '../../ComponentHelpers/Description';
import ButtonCategories from '../../ComponentHelpers/ButtonCategories';
import CarouselProduct from '../../ComponentHelpers/CarouselProduct';

export default function Products() {
  const dispatch = useDispatch();
  const categoriesData = useSelector((state) => state.getAllCategories.data);
  const productsPageInfo = useSelector(
    (state) => state.getAllProducts.pageInfo,
  );
  const categoriesPageInfo = useSelector(
    (state) => state.getAllCategories.pageInfo,
  );
  const getCategoryDetails = useSelector((state) => state.getCategoryDetails);
  const productData = useSelector((state) => state.getCategoryDetails.products);
  const [selected, setSelected] = React.useState(0);
  const [iconDesc, setIconDesc] = React.useState([
    {
      name: 'Kategori',
      count: 0,
      icon: (size = 30) => (
        <WidgetsOutlined color="grey" style={{fontSize: size}} />
      ),
    },
    {
      name: 'Produk',
      count: 0,
      icon: (size = 30) => (
        <LocalMallOutlined color="grey" style={{fontSize: size}} />
      ),
    },
    {
      name: 'Mitra',
      count: 22,
      icon: (size = 30) => (
        <StoreMallDirectoryOutlined color="grey" style={{fontSize: size}} />
      ),
    },
  ]);
  const initialMount = React.useRef(true);
  const [initialMountProducts, setInitialMountProducts] = React.useState(true);
  const initialMountProducts2 = React.useRef(true);

  React.useEffect(() => {
    dispatch(actions.categoriesActions.getCategories());
    dispatch(actions.productsActions.getCategories());
  }, []);

  React.useEffect(() => {
    if (initialMount.current) {
      if (categoriesData.length) {
        setSelected(categoriesData[0].id);
        initialMount.current = false;
      }
    }
  }, [categoriesData]);

  React.useEffect(() => {
    if (selected) {
      dispatch(actions.categoriesActions.getCategoriesDetail(selected));
    }
  }, [selected]);

  React.useEffect(() => {
    const newIconDesc = [...iconDesc];
    if (
      Object.keys(categoriesPageInfo).length ||
      Object.keys(productsPageInfo).length
    ) {
      if (Object.keys(categoriesPageInfo).length) {
        newIconDesc[0].count = categoriesPageInfo.count;
      }
      if (Object.keys(productsPageInfo).length) {
        newIconDesc[1].count = productsPageInfo.count;
      }
      setIconDesc(newIconDesc);
    }
  }, [categoriesPageInfo, productsPageInfo]);

  React.useEffect(() => {
    if (initialMountProducts2.current && productData.length) {
      setInitialMountProducts(false);
    }
  }, [productData]);

  React.useEffect(() => {
    if (!initialMountProducts2.current) {
      setInitialMountProducts(getCategoryDetails.pending);
    }
  }, [getCategoryDetails.pending]);

  return (
    <div className="parent mb-3" id="product">
      <div className="d-flex">
        <TitleBox sectionName="Our Products" />
      </div>
      <Container className="montserrat mx-auto py-3">
        {/* description */}
        <div className="d-flex justify-content-center align-items-center">
          {iconDesc.map((item, index) => (
            <Description item={item} key={index} />
          ))}
        </div>

        {/* link for selecting categories */}
        <div className="d-flex justify-content-center align-items-center my-5">
          {categoriesData.map((item, index) => (
            <ButtonCategories
              key={item.id}
              item={item}
              index={index}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>

        {/* container for product */}
        <div className="mx-auto carousel-wrapper">
          {getCategoryDetails.pending || initialMountProducts ? (
            <div
              className="d-flex justify-content-center align-items-center w-100"
              style={{height: '14em'}}
            >
              <Spinner color="esea-main" />
            </div>
          ) : (
            <CarouselProduct productData={productData} />
          )}
        </div>
        <div className="mb-3 d-flex order-now-btn justify-content-center">
          <Button
            className="font-bold btn-esea-main"
            onClick={(e) => {
              e.preventDefault();
              window.open('http://linktr.ee/eseaindonesia');
            }}
          >
            PESAN SEKARANG
          </Button>
        </div>
      </Container>
    </div>
  );
}
