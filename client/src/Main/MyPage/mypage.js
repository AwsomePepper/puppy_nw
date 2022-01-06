

import React, { useEffect, useContext, useState } from "react";
import Header from "../Header/Header";

function MyPage() {

      

    return (
        <div>
            <Header />
            <div className="container"
                style={{
                    'width': '100%', 'height': '30%', 'margin': 'auto',
                    'margin': 'center', 'marginTop': '30px'
                }}>
                <div className="mb-1 input-group flex-nowrap "
                    style={{
                        'width': '100%', 'height': '30%', 'margin': 'auto', 'margin': 'center',
                    }} >
                    <span className="input-group-text " >🙂 닉네임:</span>
                    <li className="form-control" >{sessionStorage.getItem('name')} </li> </div>
                <div className="mb-1 input-group flex-nowrap "
                    style={{
                        'width': '100%', 'height': '30%', 'margin': 'auto', 'margin': 'center',
                    }} >
                    <span className="input-group-text " >🙂 이메일:</span>
                    <li className="form-control" >{sessionStorage.getItem('email')} </li>
                </div>



                <div className="container"
                    style={{
                        'width': '100%', 'height': '30%', 'margin': 'auto',
                        'margin': 'center', 'marginTop': '30px'
                    }}>

                    <div className="mb-1 input-group flex-nowrap "
                        style={{
                            'width': '100%', 'height': '30%', 'margin': 'auto', 'margin': 'center',
                        }} >
                        <span className="input-group-text " >🐶 이름: </span>
                        <li className="form-control" >&nbsp;&nbsp; </li> </div>
                    <div className="mb-1 input-group flex-nowrap "
                        style={{
                            'width': '100%', 'height': '30%', 'margin': 'auto', 'margin': 'center',
                        }} >
                        <span className="input-group-text " >🐶 나이:</span>
                        <li className="form-control" >&nbsp;&nbsp; </li>

                    </div>
                    <div className="mb-1 input-group flex-nowrap "
                        style={{
                            'width': '100%', 'height': '30%', 'margin': 'auto', 'margin': 'center',
                        }} >
                        <span className="input-group-text " >🐶 성별:</span>
                        <li className="form-control" >&nbsp;&nbsp; </li>

                    </div>
                    <div className="mb-1 input-group flex-nowrap "
                        style={{
                            'width': '100%', 'height': '30%', 'margin': 'auto', 'margin': 'center',
                        }} >
                        <span className="input-group-text " >🐶 견종:</span>
                        <li className="form-control" >&nbsp;&nbsp; </li>

                    </div>
                    <div className="mb-1 input-group flex-nowrap "
                        style={{
                            'width': '100%', 'height': '30%', 'margin': 'auto', 'margin': 'center',
                        }} >
                        <span className="input-group-text " >🐶 사교:</span>
                        <li className="form-control" >&nbsp;&nbsp; </li>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default MyPage;