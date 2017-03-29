import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementRequest } from '../reducers';

const Counter = (props) => {
  const { incrementRequest, amount } = props;
  //console.log(amount);
  return (
    <div>
      <button onClick={incrementRequest}>increments</button>
      <p>{amount}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  amount: state.counter.amount,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ incrementRequest }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
