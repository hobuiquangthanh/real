import React from 'react';
import PropTypes from 'prop-types';

EditInfo.propTypes = {
    editInfo: PropTypes.array,
};

EditInfo.defaultProp = {
  editInfo: [],
};

function EditInfo(props) {
    const {editInfo} = props;
    return (
          <div className="panel card panel-fill">
            {editInfo.map(editInfo =>(
              <div key={editInfo.id}>
                <div className="card-header">
                <h5 className="font-16 m-1">Chỉnh Sửa Thông Tin</h5>
            </div>
            <div className="card-body">
                <form>
                <div className="form-group">
                    <label>Chủ Sở Hữu</label>
                    <input type="text" defaultValue={editInfo.name} id="FullName" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Số Điện Thoại</label>
                    <input type="text" defaultValue={editInfo.phone} id="Username" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" defaultValue={editInfo.email} id="Email" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Địa Chỉ</label>
                    <input type="text" defaultValue={editInfo.address} id="Password" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Hình Ảnh</label><br />
                    <label style={{marginBottom: 0}} className="btn btn-secondary "><span className="buttonText">Choose file</span></label>
                </div>
                <div className="form-group">
                    <label>About</label>
                    <textarea style={{height: '125px'}} id="AboutMe" className="form-control" defaultValue={editInfo.about} />
                </div>
                <button className="btn btn-primary waves-effect waves-light width-md" type="submit">Save</button>
                </form>
            </div>
              </div>
            ))}
          </div>
    );
}

export default EditInfo;