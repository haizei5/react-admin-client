import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { saveUserLogin } from '../../redux/action'
import Methods from '../../utils/utilMethods'
import apiMethod from '../../service'
import './login.scss'

const Error = ({ errorType }) => {
    return errorType.state.error ? (
        <div id="error" className="row">
            <div className="col-sm-12">
                <div className="error">
                    <img alt='error' src="assets/images/error.png" onClick={() => errorType.closeError()} />
                    <span className="errorContent">{errorType.state.errorInfo}</span>
                </div>
            </div>
        </div>
    ) : null
};
//登录
class Login extends Component {
    static propTypes = {
        userLogin: PropTypes.object.isRequired,
        saveUserLogin: PropTypes.func.isRequired
    }
    state = {
        userEmail: "",
        passWord: "",
        error: false,
        errorInfo: ""
    }
    //更新input值
    handleInput(e) {
        let key = e.target.name;
        const newVal = e.target.value;
        this.setState(() => ({
            [key]: newVal
        }))
    }
    //校验信息显示
    closeError() {
        this.setState({
            error: false,
        })
    }
    //登录保存
    onSave() {
        debugger;
        // apiMethod.userLogin(this.state).then(data => {
        //     console.log(data)
        // })
        // return;
        console.log(this.props)
        let handType, errorInfo;
        const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if (this.state.userEmail !== '') {
            if (!reg.test(this.state.userEmail)) {
                errorInfo = "邮箱格式不正确";
                handType = true
            }
        } else {
            errorInfo = "邮箱不能为空";
            handType = true
        }
        if (this.state.passWord === '') {
            debugger;
            errorInfo = "请输入密码";
            handType = true
        }
        if (handType) {
            this.setState({
                error: true,
                errorInfo
            })
            return
        } else {
            let userInfo = {
                isLogin: true
            }
            Methods.setStorage('isLogin', userInfo)
            this.props.saveUserLogin(userInfo)
            this.props.history.replace('/')
            return
        }
    }
    // 页面主体
    render() {
        return (
            <div className="signin">
                <div className="container">
                    <div className="sign-content">
                        <label className="title">后台登录</label>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="signin-form">
                                    <div className="form-group">
                                        <label>邮箱/手机号</label>
                                        <input type="email" name="userEmail" onChange={(e) => this.handleInput(e)} className="form-control" placeholder="请输入邮箱或手机号" value={this.state.userEmail} />
                                    </div>
                                    <div className="form-group">
                                        <label>密码</label>
                                        <input type="password" name="passWord" onChange={(e) => this.handleInput(e)} className="form-control" placeholder="请输入密码" value={this.state.passWord} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="signin-password">
                                    <div className="awesome-checkbox-list">
                                        <ul className="unstyled centered">
                                            <li>
                                                <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox" value="value2" />
                                                <label htmlFor="styled-checkbox-2">记住密码</label>
                                            </li>
                                            <li>
                                                <Link to="/">忘记邮箱或密码 ?</Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Error errorType={this} />
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="signin-footer">
                                    <button type="button" className="btn signin_btn" onClick={(e) => this.onSave(e)}>
                                        登&nbsp;&nbsp;&nbsp;&nbsp;录
								    </button>
                                    <p>
                                        没有帐户?
									<a href="signup.html">&nbsp;&nbsp;注册</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ userLogin: state.userLogin })
const mapDispatchToProps = (dispatch) => {
    return {
        saveUserLogin: (userLogin) => dispatch(saveUserLogin(userLogin))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);