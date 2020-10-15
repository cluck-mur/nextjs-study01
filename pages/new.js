/**
 * コンテナにしたnew.js
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../store'
import NewComponent from '../components/new'

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewComponent)
