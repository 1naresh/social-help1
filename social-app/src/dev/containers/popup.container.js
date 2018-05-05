import { connect } from 'react-redux';
import CustomAnimation from '../components/popup/popup';


function mapStateToProps(state){
    return {
        logged_in:state.users
    }
}
export default connect(mapStateToProps)(CustomAnimation);