import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import service from '../../util/http'
 import './login.less';
import Tabbar from '../../component/tabbar/tabbar';
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
export default class Login extends Component {
    render() {
        return (
            <div className="login">
                   <div className="m-login-wrapper">
                       <div className="m-login-inner">

                           <div className="m-login-form">
                           <h2>米阳登录页面</h2>
                                <WrappedNormalLoginForm />
                           </div>
                       </div>
                   </div> 
                   <Tabbar></Tabbar>
            </div>
        )
    }
    componentWillMount(){
      service.get('./data.json').then(res=>{
        console.log(res)
      })
    }
}

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator,getFieldsError } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

