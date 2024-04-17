import React from 'react';
import { Form, Input, Button, notification } from 'antd';

const ContactPage = () => {
  const onFinish = async (values) => {
    const form = new FormData();
    for (const [key, value] of Object.entries(values)) {
      form.append(key, value);
    }
    
    try {
      const response = await fetch('https://formspree.io/f/xpzvkwpz', {
        method: 'POST',
        body: form,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        notification.success({
          message: 'Message Sent',
          description: 'Your message has been sent successfully!',
        });
      } else {
        notification.error({
          message: 'Message Not Sent',
          description: 'There was an issue sending your message.',
        });
      }
    } catch (error) {
      notification.error({
        message: 'Network Error',
        description: 'Unable to send message at this time.',
      });
    }
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
