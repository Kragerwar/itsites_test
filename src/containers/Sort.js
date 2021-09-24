import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sortActions from "../actions/sort";
import {Sort} from "../components/Sort";

const mapStateToProps = ({books, sort}) => ({
    sortBy: sort.sortBy,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(sortActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Sort);
