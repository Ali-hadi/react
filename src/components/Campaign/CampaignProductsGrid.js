import React, { useState, useEffect } from 'react';
import CampaignProductCard from './CampaignProductCard';
import AddToCartModal from '../AddToCartModel';
import InfiniteScroll from 'react-infinite-scroll-component';

const CampaignProductsGrid = ({ title, products, infiniteScroll }) => {
  
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [items, setItems] = useState([])


  useEffect(() => {
    fetchMoreData();
  }, [products])

  const openCartModal = product => {
    setSelectedProduct(product);
    setIsCartModalOpen(true);
  }
  
  const fetchMoreData = () => {
    const temp = products.slice(0, items.length + 50);
    setItems(temp);
  }


  return (
    <>
      
        <div className="container-fluid">
          <div className="heading eid-title align-center">
            <h3>{ title }</h3>
          </div>
          <div className="columns_groups">
            { infiniteScroll ?
              <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={true}
              >
                {
                  items.map(product => <CampaignProductCard product={product} openCartModal={openCartModal} />)
                }
              </InfiniteScroll>
              :
              <div className='row'>
                {
                  products.map(product => <CampaignProductCard product={product} openCartModal={openCartModal} />)
                }
              </div>
            }
          </div>
        </div>


      <AddToCartModal
        isOpen={isCartModalOpen}
        setIsOpen={setIsCartModalOpen}
        selectedProduct={{ ...selectedProduct, qty: 1 }}
      />
    </>
  )
}

export default CampaignProductsGrid
