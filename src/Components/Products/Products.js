/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, Button } from 'reactstrap';
import {
  WidgetsOutlined,
  LocalMallOutlined,
  StoreMallDirectoryOutlined,
} from '@material-ui/icons';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Carousel from 'react-multi-carousel';
import useWindowDimension from '../../Helpers/useWindowDimension';
import responsive from '../../Helpers/responsiveCarousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '../Components/ProductCard';
import TitleBox from '../TitleBox';

export default function Products() {
  const { md } = useWindowDimension();
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    console.log(selected);
  }, [selected]);

  const iconDesc = [
    {
      name: 'Kategori',
      count: 3,
      icon: (size = 30) => (
        <WidgetsOutlined color="grey" style={{ fontSize: size }} />
      ),
    },
    {
      name: 'Produk',
      count: 20,
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
  ];

  const linkDesc = [
    {
      name: 'Ikan',
      actions: (index) => {
        setSelected(index);
      },
    },
    {
      name: 'Udang',
      actions: (index) => {
        setSelected(index);
      },
    },
    {
      name: 'Cumi',
      actions: (index) => {
        setSelected(index);
      },
    },
  ];

  const productData = [
    {
      id: 1,
      productName: 'Ikan Kerapu',
      price: 20000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis vestibulum lobortis. Proin a dui tempor, dapibus nulla et, sagittis sem. Maecenas sagittis sit amet felis sit amet malesuada. Phasellus et odio eu ligula viverra tempor sed sit amet nulla. Proin vulputate est augue, et dignissim arcu lobortis in. Suspendisse dolor est, interdum vel lobortis vel, lacinia quis lacus. Donec faucibus placerat turpis id tempus. Nunc ac ligula neque. Sed suscipit rhoncus mauris, ut sagittis justo tincidunt non. Integer scelerisque lectus sed lectus elementum finibus. Ut nec enim sed enim auctor sodales. Suspendisse eu quam blandit, convallis erat vel, pellentesque magna. Integer mauris nisl, tempus sed vulputate non, ullamcorper quis enim. Nulla facilisi. Vivamus gravida nisl tempus, pellentesque libero non, mattis diam.',
      stocks: 100,
      sold: 90,
      picture:
        'https://thumbs-prod.si-cdn.com/7UodV-s6j5aEVfrYwg5KQ26oBLY=/fit-in/1600x0/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg',
    },
    {
      id: 2,
      productName: 'Ikan Kerapu',
      price: 20000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis vestibulum lobortis. Proin a dui tempor, dapibus nulla et, sagittis sem. Maecenas sagittis sit amet felis sit amet malesuada. Phasellus et odio eu ligula viverra tempor sed sit amet nulla. Proin vulputate est augue, et dignissim arcu lobortis in. Suspendisse dolor est, interdum vel lobortis vel, lacinia quis lacus. Donec faucibus placerat turpis id tempus. Nunc ac ligula neque. Sed suscipit rhoncus mauris, ut sagittis justo tincidunt non. Integer scelerisque lectus sed lectus elementum finibus. Ut nec enim sed enim auctor sodales. Suspendisse eu quam blandit, convallis erat vel, pellentesque magna. Integer mauris nisl, tempus sed vulputate non, ullamcorper quis enim. Nulla facilisi. Vivamus gravida nisl tempus, pellentesque libero non, mattis diam.',
      stocks: 100,
      sold: 90,
      picture:
        'https://thumbs-prod.si-cdn.com/7UodV-s6j5aEVfrYwg5KQ26oBLY=/fit-in/1600x0/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg',
    },
    {
      id: 3,
      productName: 'Ikan Kerapu',
      price: 20000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis vestibulum lobortis. Proin a dui tempor, dapibus nulla et, sagittis sem. Maecenas sagittis sit amet felis sit amet malesuada. Phasellus et odio eu ligula viverra tempor sed sit amet nulla. Proin vulputate est augue, et dignissim arcu lobortis in. Suspendisse dolor est, interdum vel lobortis vel, lacinia quis lacus. Donec faucibus placerat turpis id tempus. Nunc ac ligula neque. Sed suscipit rhoncus mauris, ut sagittis justo tincidunt non. Integer scelerisque lectus sed lectus elementum finibus. Ut nec enim sed enim auctor sodales. Suspendisse eu quam blandit, convallis erat vel, pellentesque magna. Integer mauris nisl, tempus sed vulputate non, ullamcorper quis enim. Nulla facilisi. Vivamus gravida nisl tempus, pellentesque libero non, mattis diam.',
      stocks: 11,
      sold: 91,
      picture:
        'https://thumbs-prod.si-cdn.com/7UodV-s6j5aEVfrYwg5KQ26oBLY=/fit-in/1600x0/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg',
    },
    {
      id: 4,
      productName: 'Ikan Kerapu',
      price: 20000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis vestibulum lobortis. Proin a dui tempor, dapibus nulla et, sagittis sem. Maecenas sagittis sit amet felis sit amet malesuada. Phasellus et odio eu ligula viverra tempor sed sit amet nulla. Proin vulputate est augue, et dignissim arcu lobortis in. Suspendisse dolor est, interdum vel lobortis vel, lacinia quis lacus. Donec faucibus placerat turpis id tempus. Nunc ac ligula neque. Sed suscipit rhoncus mauris, ut sagittis justo tincidunt non. Integer scelerisque lectus sed lectus elementum finibus. Ut nec enim sed enim auctor sodales. Suspendisse eu quam blandit, convallis erat vel, pellentesque magna. Integer mauris nisl, tempus sed vulputate non, ullamcorper quis enim. Nulla facilisi. Vivamus gravida nisl tempus, pellentesque libero non, mattis diam.',
      stocks: 100,
      sold: 90,
      picture:
        'https://thumbs-prod.si-cdn.com/7UodV-s6j5aEVfrYwg5KQ26oBLY=/fit-in/1600x0/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg',
    },
    {
      id: 5,
      productName: 'Ikan Kerapu',
      price: 20000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis vestibulum lobortis. Proin a dui tempor, dapibus nulla et, sagittis sem. Maecenas sagittis sit amet felis sit amet malesuada. Phasellus et odio eu ligula viverra tempor sed sit amet nulla. Proin vulputate est augue, et dignissim arcu lobortis in. Suspendisse dolor est, interdum vel lobortis vel, lacinia quis lacus. Donec faucibus placerat turpis id tempus. Nunc ac ligula neque. Sed suscipit rhoncus mauris, ut sagittis justo tincidunt non. Integer scelerisque lectus sed lectus elementum finibus. Ut nec enim sed enim auctor sodales. Suspendisse eu quam blandit, convallis erat vel, pellentesque magna. Integer mauris nisl, tempus sed vulputate non, ullamcorper quis enim. Nulla facilisi. Vivamus gravida nisl tempus, pellentesque libero non, mattis diam.',
      stocks: 100,
      sold: 90,
      picture:
        'https://thumbs-prod.si-cdn.com/7UodV-s6j5aEVfrYwg5KQ26oBLY=/fit-in/1600x0/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg',
    },
    {
      id: 6,
      productName: 'Ikan Kerapu',
      price: 20000,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis vestibulum lobortis. Proin a dui tempor, dapibus nulla et, sagittis sem. Maecenas sagittis sit amet felis sit amet malesuada. Phasellus et odio eu ligula viverra tempor sed sit amet nulla. Proin vulputate est augue, et dignissim arcu lobortis in. Suspendisse dolor est, interdum vel lobortis vel, lacinia quis lacus. Donec faucibus placerat turpis id tempus. Nunc ac ligula neque. Sed suscipit rhoncus mauris, ut sagittis justo tincidunt non. Integer scelerisque lectus sed lectus elementum finibus. Ut nec enim sed enim auctor sodales. Suspendisse eu quam blandit, convallis erat vel, pellentesque magna. Integer mauris nisl, tempus sed vulputate non, ullamcorper quis enim. Nulla facilisi. Vivamus gravida nisl tempus, pellentesque libero non, mattis diam.',
      stocks: 100,
      sold: 90,
      picture:
        'https://thumbs-prod.si-cdn.com/7UodV-s6j5aEVfrYwg5KQ26oBLY=/fit-in/1600x0/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg',
    },
  ];

  // const pageInfo = {
  //   count: 3,
  //   pages: 4,
  //   currentPage: 1,
  //   dataPerPage: 3,
  //   nextLink: null,
  //   prefLink: null,
  // };

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
    <div className="parent mb-5" id="product">
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
          {linkDesc.map((item, index) => (
            <Button
              onClick={() => item.actions(index)}
              className={`categories-btn ${index === selected ? 'btn-esea-main ' : 'btn-light '
                } ${index === 0 ? '' : 'ml-3'}`}
            >
              <text className={md ? 'font-1-em' : 'font-1p2-em'}>
                {item.name}
              </text>
            </Button>
          ))}
        </div>
        {/* container for product */}
        <div className="mx-auto carousel-wrapper">
          {productData.length ? (
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
              {productData.map((item) => (
                <ProductCard item={item} />
              ))}
            </Carousel>
          ) : null}
        </div>
        <div className="mb-3 d-flex order-now-btn justify-content-center">
          <Button
            className="font-bold btn-esea-main"
            onClick={(e) => {
              e.preventDefault();
              window.open('http://google.com');
            }}
          >
            PESAN SEKARANG
          </Button>
        </div>
      </Container>
    </div>
  );
}
