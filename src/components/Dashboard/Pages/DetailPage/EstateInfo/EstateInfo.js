import React from 'react';
import PropTypes from 'prop-types';
import Estate from './Estate';

EstateInfo.propTypes = {
  estateInfo: PropTypes.array,
};

function EstateInfo({estateInfo}) {
    return (
        <div>
          {estateInfo.map(estate => (
                    <div key={estate.id}>
                        <Estate estate={estate} />
                    </div>         
                ))}
        </div>
    );
}

export default EstateInfo;