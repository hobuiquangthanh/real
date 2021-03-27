import React from 'react';
import PropTypes from 'prop-types';

EditInfo.propTypes = {
  editInfo: PropTypes.array,
};

EditInfo.defaultProps = {
  editInfo: [],
};

function EditInfo({editInfo}) {
  return (
    <div>
      {editInfo.map(edit => (
        <div key={edit.id}>
          <div className="panel card panel-fill">
                        <div className="card-header">
                            <h5 className="font-16 m-1">Chỉnh Sửa Thông Tin</h5>
                        </div>
                        <div className="card-body">
                            <form>
                            <div className="form-group">
                                <label htmlFor="FullName">Chủ Sở Hữu</label>
                                <input type="text" defaultValue={edit.ownerName} id="FullName" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Username">Số Điện Thoại</label>
                                <input type="text" defaultValue={edit.phone} id="Username" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">Email</label>
                                <input type="email" defaultValue={edit.email} id="Email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Address">Địa Chỉ</label>
                                <input type="text" defaultValue={edit.address} id="Address" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="RePassword">Hình Ảnh</label><br />
                                <label htmlFor="filestyle-1" style={{marginBottom: 0}} className="btn btn-secondary "><span className="buttonText">Choose file</span></label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="AboutMe">About</label>
                                <textarea style={{height: '125px'}} id="AboutMe" className="form-control" defaultValue={edit.about} />
                            </div>
                            <button className="btn btn-primary waves-effect waves-light width-md" type="submit">Save</button>
                            </form>
                        </div>
                        </div>
        </div>         
      ))}
    </div>
  );
}

export default EditInfo;