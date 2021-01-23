/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Container, Button, Spinner} from 'reactstrap';
import {
  WidgetsOutlined,
  LocalMallOutlined,
  StoreMallDirectoryOutlined,
} from '@material-ui/icons';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import {useSelector, useDispatch} from 'react-redux';
import Carousel from 'react-multi-carousel';
import useWindowDimension from '../../Helpers/useWindowDimension';
import responsive from '../../Helpers/responsiveCarousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '../ComponentHelpers/ProductCard';
import actions from '../../redux/actions/index';
import TitleBox from '../TitleBox';

export default function Products() {
  const dispatch = useDispatch();
  const {md} = useWindowDimension();
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
        <WidgetsOutlined color="grey" style={{ fontSize: size }} />
      ),
    },
    {
      name: 'Produk',
      count: 0,
      icon: (size = 30) => (
        <LocalMallOutlined color="grey" style={{ fontSize: size }} />
      ),
    },
    {
      name: 'Mitra',
      count: 22,
      icon: (size = 30) => (
        <StoreMallDirectoryOutlined color="grey" style={{ fontSize: size }} />
      ),
    },
  ]);
  const initialMount = React.useRef(true);

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

  const LeftArrow = ({ onClick }) => (
    <Button
      onClick={() => onClick()}
      color="light"
      className="mx-auto position-absolute arrow-btn-left"
    >
      <FiChevronLeft size="1.5em" />
    </Button>
  );

  const RightArrow = ({ onClick }) => (
    <Button
      onClick={() => onClick()}
      color="light"
      className="mx-auto position-absolute arrow-btn-right"
    >
      <FiChevronRight size="1.5em" />
    </Button>
  );

  const CustomDot = ({ onClick, ...rest }) => {
    const { active } = rest;
    // const carouselItems = productData.map((item) => (
    //   <ProductCard item={item} />
    // ));
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      // <button
      //   className={active ? "active" : "inactive"}
      //   onClick={() => onClick()}
      // >
      //   {React.Children.toArray(carouselItems)[index]}
      // </button>

      <Button
        onClick={() => onClick()}
        className={`dot-button mx-1 mb-1 ${active ? 'dot-active' : 'dot-inactive'
          }`}
      >
        &nbsp;
      </Button>
    );
  };

  return (
    <div className="parent mb-3" id="product">
      <div className="d-flex">
        <TitleBox sectionName="Our Products" />
      </div>
      <Container className="montserrat mx-auto py-3">
        {/* description */}
        <div className="d-flex justify-content-center align-items-center">
          {iconDesc.map((item) => (
            <div className="d-flex mx-4 justify-content-center align-items-center">
              {item.icon(!md ? 45 : 30)}
              <div className="d-flex flex-column ml-2">
                <text
                  className={`montserrat height-0 ${!md ? 'font-1p5-em' : 'font-1p2-em'
                    }`}
                >
                  {item.count}
                </text>
                <text
                  className={`montserrat height-0 ${!md ? 'font-p75-em' : 'font-p5-em'
                    }`}
                >
                  {item.name}
                </text>
              </div>
            </div>
          ))}
        </div>
        {/* link for selecting categories */}
        <div className="d-flex justify-content-center align-items-center my-5">
          {categoriesData.map((item, index) => (
            <Button
              onClick={() => setSelected(item.id)}
              className={`categories-btn categories-btn-shadow ${
                item.id === selected ? 'btn-esea-main ' : 'btn-light '
              } ${index === 0 ? '' : 'ml-3'}`}
            >
              <text className={md ? 'font-1-em' : 'font-1p2-em'}>
                {item.categoryName}
              </text>
            </Button>
          ))}
        </div>
        {/* container for product */}
        <div className="mx-auto carousel-wrapper">
          <Carousel
            showDots
            responsive={responsive}
            keyBoardControl
            customTransition="all .5"
            transitionDuration={500}
            removeArrowOnDeviceType="mobile"
            customDot={<CustomDot />}
            customLeftArrow={<LeftArrow />}
            customRightArrow={<RightArrow />}
          >
            {getCategoryDetails.pending || !productData.length
              ? [
                  <div
                    className="d-flex justify-content-center align-items-center w-100"
                    style={{height: '10em'}}
                  >
                    <Spinner color="esea-main" />
                  </div>,
                ]
              : productData.map((item) => <ProductCard item={item} />)}
          </Carousel>
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
