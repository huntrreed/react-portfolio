import React from 'react';
import { Form, Input, Button } from 'antd';

const ContactPage = () => {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
    // do i need to handle form submission? do it here
  };

  return (
    <div className="contact-page" style={{ backgroundImage: 'url(your-background-image.jpg)' }}>
      <Form
        name="contact"
        className="contact-form"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="message"
          label="Message"
          rules={[{ required: true, message: 'Please input your message!' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactPage;
