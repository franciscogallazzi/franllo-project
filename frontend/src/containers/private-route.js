import PrivateRoute from '../components/auth/private-route';

import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated
    }
  }

export default connect(mapStateToProps)(PrivateRoute)