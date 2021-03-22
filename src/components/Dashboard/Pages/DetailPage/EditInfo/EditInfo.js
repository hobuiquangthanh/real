import React from 'react';
import PropTypes from 'prop-types';

EditInfo.propTypes = {
    
};

function EditInfo(props) {
    return (
        <div>
            <div classname="tab-pane" id="profile-b1">
  {'{'}/* Personal-Information */{'}'}
  <div classname="panel card panel-fill">
    <div classname="card-header">
      <h5 classname="font-16 m-1">Chỉnh Sửa Thông Tin</h5>
    </div>
    <div classname="card-body">
      <form>
        <div classname="form-group">
          <label htmlfor="FullName">Chủ Sở Hữu</label>
          <input type="text" defaultvalue="John Doe" id="FullName" classname="form-control" />
        </div>
        <div classname="form-group">
          <label htmlfor="Username">Số Điện Thoại</label>
          <input type="text" defaultvalue="john" id="Username" classname="form-control" />
        </div>
        <div classname="form-group">
          <label htmlfor="Email">Email</label>
          <input type="email" defaultvalue="first.last@example.com" id="Email" classname="form-control" />
        </div>
        <div classname="form-group">
          <label htmlfor="Password">Địa Chỉ</label>
          <input type="password" placeholder="6 - 15 Characters" id="Password" classname="form-control" />
        </div>
        <div classname="form-group">
          <label htmlfor="RePassword">Hình Ảnh</label><br />
          <label htmlfor="filestyle-1" style={{marginbottom: '0'}} classname="btn btn-secondary "><span classname="buttonText">Choose file</span></label>
        </div>
        <div classname="form-group">
          <label htmlfor="AboutMe">About</label>
          <textarea style={{height: '125px'}} id="AboutMe" classname="form-control" defaultvalue="{&quot;Lorem" ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat wisi enim ad minim veniam quis nostrud exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo consequat."} defaultValue={"                            </div>\n                            <button className=\"btn btn-primary waves-effect waves-light width-md\" type=\"submit\">Save</button>\n                            </form>\n                        </div>\n                        </div>\n                        {/* Personal-Information */}\n                    </div>\n                    </div>\n"} /></div></form></div></div></div>

        </div>
    );
}

export default EditInfo;