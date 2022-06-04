import React, { useState } from 'react';
import { connect} from 'react-redux';

import {checkBox} from '../actions';


const Board = (props) => {
    console.log('Props inside Board',props)


    
    
    return (
        <div>
            <div className='row'></div>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-8'>
                    <button
                    className='btn btn-primary'
                    style={{width:50,height:50,margin:10}}
                    onClick={
                        ()=>{
                            props.checkBox(1,props.player)
                        }
                    }
                    >
                        {props.box[0][0]}
                    </button>

                    <button
                    className='btn btn-primary'
                    style={{width:50,height:50,margin:10}}
                    onClick={
                        ()=>{
                            props.checkBox(2,props.player)
                        }
                    }
                    >
                        {props.box[0][1]}
                    </button>

                    <button
                    className='btn btn-primary'
                    style={{width:50,height:50,margin:10}}
                    onClick={
                        ()=>{
                            props.checkBox(3,props.player)
                        }
                    }
                    >
                        {props.box[0][2]}
                    </button>
                    
                </div>
                <div className='col-2'></div>
            </div>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-8'>
                <button
                    className='btn btn-primary'
                    style={{width:50,height:50,margin:10}}
                    onClick={
                        ()=>{
                            props.checkBox(4,props.player)
                        }
                    }
                    >
                        {props.box[1][0]}
                    </button>

                    <button
                    className='btn btn-primary'
                    style={{width:50,height:50,margin:10}}
                    onClick={
                        ()=>{
                            props.checkBox(5,props.player)
                        }
                    }
                    >
                        {props.box[1][1]}
                    </button>

                    <button
                    className='btn btn-primary'
                    style={{width:50,height:50,margin:10}}
                    onClick={
                        ()=>{
                            props.checkBox(6,props.player)
                        }
                    }
                    >
                        {props.box[1][2]}
                    </button>
                </div>
                <div className='col-2'></div>
            </div>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-8'>
                    
                <button
                    className='btn btn-primary'
                    style={{width:50,height:50,margin:10}}
                    onClick={
                        ()=>{
                            props.checkBox(7,props.player)
                        }
                    }
                    >
                        {props.box[2][0]}
                    </button>

                    <button
                    className='btn btn-primary'
                    style={{width:50,height:50,margin:10}}
                    onClick={
                        ()=>{
                            props.checkBox(8,props.player)
                        }
                    }
                    >
                        {props.box[2][1]}
                    </button>

                    <button
                    className='btn btn-primary'
                    style={{width:50,height:50,margin:10}}
                    onClick={
                        ()=>{
                            props.checkBox(9,props.player)
                        }
                    }
                    >
                        {props.box[2][2]}
                    </button>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) =>{
        console.log("Inside map state to props",state);
        return state;
};


export default connect(mapStateToProps,{checkBox})(Board);