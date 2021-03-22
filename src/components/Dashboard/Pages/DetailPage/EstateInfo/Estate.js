import React from 'react';
import PropTypes from 'prop-types';

Estate.propTypes = {
  estate: PropTypes.object,
};

function Estate({estate}) {
    return (
        <div>
                        <div>
  <div classname="row">
    <div classname="col-lg-4">
      <div classname="panel card panel-fill">
        <div classname="card-header">
          <h5 classname="font-16 m-1">Thông Tin Liên Hệ</h5>
        </div>
        <div classname="card-body">
          <div classname="mb-4">
            <strong>Chủ Sở Hữu</strong>
            <br />
            <p classname="text-muted">{estate.ownerName}</p>
          </div>
          <div classname="mb-4">
            <strong>Số Điện Thoại</strong>
            <br />
            <p classname="text-muted">{estate.phone}</p>
          </div>
          <div classname="mb-4">
            <strong>Email</strong>
            <br />
            <p classname="text-muted">{estate.email}</p>
          </div>
          <div classname="mb-0">
            <strong>Địa Chỉ</strong>
            <br />
            <p classname="text-muted mb-0">{estate.address}</p>
          </div>
        </div>
      </div>
      <div classname="panel card panel-fill">
        <div classname="card-header">
          <h5 classname="font-16 m-1">Social</h5>
        </div>
        <div classname="card-body">
          <ul classname="social-links list-inline mb-0">
            <li classname="list-inline-item">
              <a title data-placement="top" data-toggle="tooltip" classname="tooltips" href="#" data-original-title="Facebook"><i classname="fab fa-facebook-f" /></a><i classname="fab fa-facebook-f">
              </i></li><i classname="fab fa-facebook-f">
              <li classname="list-inline-item">
                <a title data-placement="top" data-toggle="tooltip" classname="tooltips" href="#" data-original-title="Twitter"><i classname="fab fa-twitter" /></a><i classname="fab fa-twitter">
                </i></li><i classname="fab fa-twitter">
                <li classname="list-inline-item">
                  <a title data-placement="top" data-toggle="tooltip" classname="tooltips" href="#" data-original-title="Skype"><i classname="fab fa-skype" /></a><i classname="fab fa-skype">
                  </i></li><i classname="fab fa-skype">
                </i></i></i></ul><i classname="fab fa-facebook-f"><i classname="fab fa-twitter"><i classname="fab fa-skype">
              </i></i></i></div><i classname="fab fa-facebook-f"><i classname="fab fa-twitter"><i classname="fab fa-skype">
            </i></i></i></div><i classname="fab fa-facebook-f"><i classname="fab fa-twitter"><i classname="fab fa-skype">
          </i></i></i></div><i classname="fab fa-facebook-f"><i classname="fab fa-twitter"><i classname="fab fa-skype">
          <div classname="col-lg-8">
            <div classname="panel card panel-fill">
              <div classname="card-header">
                <h5 classname="font-16 m-1">Thông Tin Bất Động Sản</h5>
              </div>
              <div classname="card-body">
                <h5 classname="font-14 mb-3 text-uppercase">About</h5>
                {estate.about}
              </div>
            </div>
          </div>
        </i></i></i></div><i classname="fab fa-facebook-f"><i classname="fab fa-twitter"><i classname="fab fa-skype">
      </i></i></i></div>

        </div>
    );
}

export default Estate;