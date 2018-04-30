import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Signup from '../components/signup/signup';
import { onSignup } from '../actions/index'

function mapStateToProps(state){
    return{
        users:state.users
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({onSignup:onSignup},dispatch)
}
export default connect(mapStateToProps ,matchDispatchToProps)(Signup);