import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="container">
                <div className="brands">
                    <h1>Featured Brands</h1>
                    <div className="show-brands">
                        <img src={require('../images/brands1.jpg')} />
                        <img src={require('../images/brands2.jpg')} />
                        <img src={require('../images/brands3.jpg')} />
                        <img src={require('../images/brands4.jpg')} />
                        <img src={require('../images/brands5.jpg')} />
                        <img src={require('../images/brands6.jpg')} />
                        <img src={require('../images/brands7.jpg')} />
                        <img src={require('../images/brands8.png')} />
                        <img src={require('../images/brands9.jpg')} />
                        <img src={require('../images/brands10.png')} />
                        <img src={require('../images/brands11.jpg')} />
                        <img src={require('../images/brands12.jpg')} />
                        <img src={require('../images/brands13.jpg')} />
                        <img src={require('../images/brands14.jpg')} />
                    </div>
                </div>

                <div className="new-this-week">
                    <h1>New This Week</h1>
                    <div className="show-product">
                        <div className="product">
                            <img src={require('../images/product1.jpg')} />
                            <h3>All Under Rp.188000</h3>
                            <p>
                                Semua produk fashion untuk jiwa stylish Anda di bawah Rp188.000
                                </p>
                        </div>
                        <div className="product">
                            <img src={require('../images/product2.jpg')} />
                            <h3>KEMEJA DI BAWAH RP249.000</h3>
                            <p>
                                Temukan pilihan kemeja santai hingga formal disini
                                </p>
                        </div>
                        <div className="product">
                            <img src={require('../images/product3.jpg')} />
                            <h3>THE CROSSBODY BAGS UP TO 70% OFF</h3>
                            <p>
                                Style tas paling populer untuk menemani hari-hari kasual Anda.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;