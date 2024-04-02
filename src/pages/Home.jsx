import React from 'react';
import { Layout } from 'antd';
import SiderImage from '../assets/me.jpg'; 

const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
  return (
    <Layout style={{ minHeight: '60vh' }}>
      <Layout>
        <Sider width={500} style={{ background: `url(${SiderImage}) no-repeat center center`, backgroundSize: 'cover' }} />
        <Content className="home-content">
          Hello! My name is Hunter and I am a new full stack web developer. I recently finished the University of Denver's coding bootcamp and am excited to start working in the web development world. Thanks for visiting my page!
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
