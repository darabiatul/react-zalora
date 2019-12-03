import React, { Component } from 'react';

class Slider extends Component {

    render() {
        return (
            <div className="container">
                <div id="content">
                    <div className="content-item">
                        <div className="advantages">
                            <div className="advantage-item">
                                <i className="fa fa-check-square-o"></i>
                                <span>Produk Original & Terjamin</span>
                            </div>
                            <div className="advantage-item">
                                <i className="fa fa-tags"></i>
                                <span>Ribuan Fashion Brand</span>
                            </div>
                            <div className="advantage-item">
                                <i className="fa fa-refresh"></i>
                                <span>Gratis Pengembalian</span>
                            </div>
                            <div className="advantage-item">
                                <i className="fa fa-question-circle-o"></i>
                                <span>Pertanyaan?</span>
                            </div>
                        </div>
                        <button className="download-discount">
                            Download & Dapatkan Diskon 20% <i className="fa fa-mobile"></i>
                        </button>
                    </div>

                    <div class="content-item">
                        <div className="banner-1">
                            <div className="left-part">
                                <div className="shop-pria">Shop Pria</div>

                                <div className="right-part">
                                    <div className="shop-wanita">Shop Wanita</div>
                                </div>
                            </div>
                        </div>

                        <div className="content-item">
                            <div className="banner-2">
                                <img src={require('../images/main_feature_2.jpg')} />
                            </div>
                        </div>
                        <div className="content-item">
                            <div className="banner-2">
                                <img src={require('../images/main_feature_3.jpg')} />
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        );
    }
}

export default Slider;