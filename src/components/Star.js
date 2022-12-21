import PropTypes from 'prop-types'


const Star = ({ selected=false, onClick=f=>f }) => 
    <div className={ (selected) ? "star selected" : "star" }
        onClick={ onClick }>
    </div>

Star.protoTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default Star