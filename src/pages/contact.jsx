import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/css/Contact.css';

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

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
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setFormSubmitted(true);
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
    <div className="contact-page">
      <div className="hero-container">
        <h1 className="contact-header">CONTACT</h1>
      </div>
      <div className="contact-container">
        <motion.div
          className="reach-out"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
        >
          Got a website, project or idea in mind? Send me an email and let's talk more!
        </motion.div>
        <motion.div
          className="form-container"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <AnimatePresence>
            {!formSubmitted ? (
              <Form
                name="contact"
                className="contact-form"
                onFinish={onFinish}
                layout="vertical"
                key="contact-form"
              >
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please input your name!' }]}
                >
                  <Input placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                >
                  <Input placeholder="Your Email" />
                </Form.Item>
                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: 'Please input your message!' }]}
                >
                  <Input.TextArea placeholder="Your Message" />
                </Form.Item>
                <Form.Item>
                  <motion.button
                    type="submit"
                    className="ant-btn ant-btn-primary"
                    whileTap={{ scale: 1.1 }}
                    onClick={() => setFormSubmitted(true)}
                  >
                    Send Message
                  </motion.button>
                </Form.Item>
              </Form>
            ) : (
              <motion.div
                key="thank-you-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="thank-you-message"
              >
                Your message has been sent!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
