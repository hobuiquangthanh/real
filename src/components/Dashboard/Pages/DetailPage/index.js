import React from 'react';
import PropTypes from 'prop-types';

Detail.propTypes = {
    
};

function Detail(props) {
    return (
        <div>
        {/* Start Page Content here */}
            {/* ============================================================== */}
            <div className="content-page">
            <div className="content">
                {/* Start container-fluid */}
                <div className="container-fluid">
                {/* start  */}
                <div className="row">
                    <div className="col-md-12">
                    <div className="p-0 text-center">
                        <div className="member-card">
                        <div className="avatar-xxl member-thumb mb-2 center-page mx-auto">
                            <img src="../../../../../../public/images/users/avatar-3.jpg" className="rounded-circle img-thumbnail" alt="profile-image" />
                            <i className="mdi mdi-star-circle member-star text-success" title="verified user" />
                        </div>
                        <div className>
                            <h5 className="mt-3">Địa Chỉ Bất Động Sản</h5>
                            <p className="text-muted">Tên Chủ Sở Hữu</p>
                        </div>
                        <p className="text-muted mt-2">
                            Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                        </p>
                        </div>
                    </div>
                    {/* end card-box */}
                    </div>
                    {/* end col */}
                </div>
                {/* end row */}
                {/* end */}
                <div className="mt-5">
                    <ul className="nav nav-tabs tabs-bordered">
                    <li className="nav-item">
                        <a href="#home-b1" data-toggle="tab" aria-expanded="false" className="nav-link active">
                        Thông Tin
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#profile-b1" data-toggle="tab" aria-expanded="true" className="nav-link">
                        Chỉnh Sửa
                        </a>
                    </li>
                    </ul>
                    <div className="tab-content">
                    <div className="tab-pane active" id="home-b1">
                        <div className="row">
                        <div className="col-lg-4">
                            {/* Personal-Information */}
                            <div className="panel card panel-fill">
                            <div className="card-header">
                                <h5 className="font-16 m-1">Thông Tin Liên Hệ</h5>
                            </div>
                            <div className="card-body">
                                <div className="mb-4">
                                <strong>Chủ Sở Hữu</strong>
                                <br />
                                <p className="text-muted">Mark A. McKnight</p>
                                </div>
                                <div className="mb-4">
                                <strong>Số Điện Thoại</strong>
                                <br />
                                <p className="text-muted">(123) 123 1234</p>
                                </div>
                                <div className="mb-4">
                                <strong>Email</strong>
                                <br />
                                <p className="text-muted">johnath@domain.com</p>
                                </div>
                                <div className="mb-0">
                                <strong>Địa Chỉ</strong>
                                <br />
                                <p className="text-muted mb-0">123 Quang Trung, Q.12, Tp.HCM</p>
                                </div>
                            </div>
                            </div>
                            {/* Personal-Information */}
                            {/* Social */}
                            <div className="panel card panel-fill">
                            <div className="card-header">
                                <h5 className="font-16 m-1">Social</h5>
                            </div>
                            <div className="card-body">
                                <ul className="social-links list-inline mb-0">
                                <li className="list-inline-item">
                                    <a title data-placement="top" data-toggle="tooltip" className="tooltips" href="#" data-original-title="Facebook"><i className="fab fa-facebook-f" /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a title data-placement="top" data-toggle="tooltip" className="tooltips" href="#" data-original-title="Twitter"><i className="fab fa-twitter" /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a title data-placement="top" data-toggle="tooltip" className="tooltips" href="#" data-original-title="Skype"><i className="fab fa-skype" /></a>
                                </li>
                                </ul>
                            </div>
                            </div>
                            {/* Social */}
                        </div>
                        <div className="col-lg-8">
                            {/* Personal-Information */}
                            <div className="panel card panel-fill">
                            <div className="card-header">
                                <h5 className="font-16 m-1">Thông Tin Bất Động Sản</h5>
                            </div>
                            <div className="card-body">
                                <h5 className="font-14 mb-3 text-uppercase">About</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p><strong>But also the leap into electronic typesetting, remaining
                                    essentially unchanged.</strong></p>
                                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <div className>
                                <h5 className="font-14 mb-3 text-uppercase mt-4 mb-3">Skills</h5>
                                <div className="mb-3">
                                    <h5 className="font-14">Angular Js <span className="float-right">60%</span></h5>
                                    <div className="progress">
                                    <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                                        <span className="sr-only">60% Complete</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <h5 className="font-14">Javascript <span className="float-right">90%</span></h5>
                                    <div className="progress">
                                    <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                                        <span className="sr-only">90% Complete</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <h5 className="font-14">Wordpress <span className="float-right">80%</span></h5>
                                    <div className="progress">
                                    <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                                        <span className="sr-only">80% Complete</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="mb-0">
                                    <h5 className="font-14">HTML5 &amp; CSS3 <span className="float-right">95%</span>
                                    </h5>
                                    <div className="progress mb-0">
                                    <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{width: '95%'}}>
                                        <span className="sr-only">95% Complete</span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* Personal-Information */}
                        </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="profile-b1">
                        {/* Personal-Information */}
                        <div className="panel card panel-fill">
                        <div className="card-header">
                            <h5 className="font-16 m-1">Chỉnh Sửa Thông Tin</h5>
                        </div>
                        <div className="card-body">
                            <form>
                            <div className="form-group">
                                <label htmlFor="FullName">Chủ Sở Hữu</label>
                                <input type="text" defaultValue="John Doe" id="FullName" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Username">Số Điện Thoại</label>
                                <input type="text" defaultValue="john" id="Username" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">Email</label>
                                <input type="email" defaultValue="first.last@example.com" id="Email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Địa Chỉ</label>
                                <input type="password" placeholder="6 - 15 Characters" id="Password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="RePassword">Hình Ảnh</label><br />
                                <label htmlFor="filestyle-1" style={{marginBottom: 0}} className="btn btn-secondary "><span className="buttonText">Choose file</span></label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="AboutMe">About</label>
                                <textarea style={{height: '125px'}} id="AboutMe" className="form-control" defaultValue={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."} />
                            </div>
                            <button className="btn btn-primary waves-effect waves-light width-md" type="submit">Save</button>
                            </form>
                        </div>
                        </div>
                        {/* Personal-Information */}
                    </div>
                    </div>
                </div>
                </div>
                {/* end container-fluid */}
                {/* Footer Start */}
                <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-md-12">
                        2017 - 2020 © Simple theme by <a href="#">Coderthemes</a>
                    </div>
                    </div>
                </div>
                </footer>
                {/* end Footer */}
            </div>
            {/* end content */}
            </div>
            {/* END content-page */}

        </div>
    );
}

export default Detail;