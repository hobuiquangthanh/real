import React from 'react';
import PropTypes from 'prop-types';

EstateInfo.propTypes = {
    estateInfo: PropTypes.array,
};

EstateInfo.defaultProp = {
  estateInfo: [],
};

function EstateInfo(props) {
    const {estateInfo} = props;
    return (
        <div>
          {estateInfo.map(estateInfo =>(
                        <div key={estateInfo.id}>
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="panel card panel-fill">
                              <div className="card-header">
                                <h5 className="font-16 m-1">Thông Tin Liên Hệ</h5>
                              </div>
                              <div className="card-body">
                                <div className="mb-4">
                                  <strong>Chủ Sở Hữu</strong>
                                  <br />
                                  <p className="text-muted">{estateInfo.name}</p>
                                </div>
                                <div className="mb-4">
                                  <strong>Số Điện Thoại</strong>
                                  <br />
                                  <p className="text-muted">{estateInfo.phone}</p>
                                </div>
                                <div className="mb-4">
                                  <strong>Email</strong>
                                  <br />
                                  <p className="text-muted">{estateInfo.email}</p>
                                </div>
                                <div className="mb-0">
                                  <strong>Địa Chỉ</strong>
                                  <br />
                                  <p className="text-muted mb-0">{estateInfo.address}</p>
                                </div>
                              </div>
                            </div>
                            <div className="panel card panel-fill">
                              <div className="card-header">
                                <h5 className="font-16 m-1">Social</h5>
                              </div>
                              <div className="card-body">
                                <ul className="social-links list-inline mb-0">
                                  <li className="list-inline-item">
                                    <i className="fab fa-facebook-f">
                                    </i></li>
                                    <li className="list-inline-item">
                                      <i className="fab fa-twitter">
                                      </i></li>
                                      <li className="list-inline-item">
                                        <i className="fab fa-skype">
                                        </i></li></ul></div></div></div>
                                <div className="col-lg-8">
                                  <div className="panel card panel-fill">
                                    <div className="card-header">
                                      <h5 className="font-16 m-1">Thông Tin Bất Động Sản</h5>
                                    </div>
                                    <div className="card-body">
                                      <h5 className="font-14 mb-3 text-uppercase">About</h5>
                                      {estateInfo.about}
                                    </div>
                                  </div>
                                </div>
                              </div></div>
                      
          ))}
        </div>
    );
}

export default EstateInfo;