import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../components/loginpage/loginpage';
import { onLogin } from '../actions'

function mapStateToProps(state){
    return {
        users:state.users
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({onLogin:onLogin},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Login)