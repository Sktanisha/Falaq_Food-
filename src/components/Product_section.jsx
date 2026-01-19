import React from "react";

function Product_section() {
  return (
    <section id="featured_product">
      <div className="container">
        <h2 className="title">FEATURED PRODUCTS</h2>

        <div className="featured_wrapper">
          <div className="product_cart">
            <img src="/images/item1.png" alt="product" />
            <h3>হানি কম্বো – একসাথে চারটি ভিন্ন মধু</h3>
            <div className="price">
              <del>1,950 ৳</del>
              <h5>1,300 ৳</h5>
            </div>
            <button>Add to cart</button>
            <button>Buy now</button>
          </div>

          <div className="product_cart">
            <img src="/images/item2.png" alt="product" />
            <h3>সুন্দরবনের খলিশা ফুলের মধু</h3>
            <div className="price">
              <del>1,800 ৳</del>
              <h5>1,300 ৳</h5>
            </div>
            <button>Add to cart</button>
            <button>Buy now</button>
          </div>

          <div className="product_cart">
            <img src="/images/item3.png" alt="product" />
            <h3>লিচু ফুলের মধু ২ কেজি</h3>
            <div className="price">
              <del>1,800 ৳</del>
              <h5>1,000 ৳</h5>
            </div>
            <button>Add to cart</button>
            <button>Buy now</button>
          </div>

          <div className="product_cart">
            <img src="/images/item4.png" alt="product" />
            <h3>Chia Seeds- 2 kg ( চিয়া সিড )</h3>
            <div className="price">
              <del>1,900 ৳</del>
              <h5>1,050 ৳</h5>
            </div>
            <button>Add to cart</button>
            <button>Buy now</button>
          </div>

          <div className="product_cart">
            <img src="/images/item5.png" alt="product" />
            <h3>বিটরুট পাউডার (Beetroot Powder)</h3>
            <div className="price">
              <del>1,950 ৳</del>
              <h5>1,300 ৳</h5>
            </div>
            <button>Add to cart</button>
            <button>Buy now</button>
          </div>

          <div className="product_cart">
            <img src="/images/item6.png" alt="product" />
            <h3>মসলা কম্বো – (ফ্যামিলি প্যাক)</h3>
            <div className="price">
              <h5>700 ৳ - 1,300 ৳</h5>
            </div>
            <button>Add to cart</button>
            <button>Buy now</button>
          </div>

          <div className="product_cart">
            <img src="/images/item7.png" alt="product" />
            <h3>সিড মিক্স ( Seed Mix ) – 500gm</h3>
            <div className="price">
              <del>900 ৳</del>
              <h5>750 ৳</h5>
            </div>
            <button>Add to cart</button>
            <button>Buy now</button>
          </div>

          <div className="product_cart">
            <img src="/images/item8.png" alt="product" />
            <h3>সিডমিক্স কম্বো (Seed Mix Combo)</h3>
            <div className="price">
              <del>2,000 ৳</del>
              <h5>1,200 ৳</h5>
            </div>
            <button>Add to cart</button>
            <button>Buy now</button>
          </div>

          <div className="product_cart">
            <img src="/images/item9.png" alt="product" />
            <h3>ধনিয়া ফুলের মধু – ২ কেজি</h3>
            <div className="price">
              <del>1,400 ৳</del>
              <h5>1,100 ৳</h5>
            </div>
            <button>Add to cart</button>
            <button>Buy now</button>
          </div>

          <div className="product_cart">
            <img src="/images/item10.png" alt="product" />
            <h3>প্রিমিয়াম ঘি (Ghee) – 1KG</h3>
            <div className="price">
              <del>2,200 ৳</del>
              <h5>1,700 ৳</h5>
            </div>
            <button>Add to cart</button>
            <button>Buy now</button>
          </div>

          <div className="product_cart">
            <img src="/images/item12.png" alt="product" />
            <h3>এপ্রিকট (Apricot) – 1KG</h3>
            <div className="price">
              <h5>700 ৳ - 1,300 ৳</h5>
            </div>
            <button>Add to cart</button>
            <button>Buy now</button>
          </div>

          <div className="product_cart">
            <img src="/images/item.png" alt="product" />
            <h3>সরিষা ফুলের মধু ২ কেজি</h3>
            <div className="price">
              <del>1,500 ৳</del>
              <h5>900 ৳</h5>
            </div>
            <button>Add to cart</button>
            <button>Buy now</button>
          </div>
        </div>

        <div className="view_more_div">
          <button className="view_more">View more</button>
        </div>
      </div>
    </section>
  );
}

export default Product_section;
