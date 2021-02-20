import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'


const Test = props => {

  const { topicId } = useParams();

  return (
    <div>
      {topicId}
    </div>
  )
}

Test.propTypes = {

}

export default Test
