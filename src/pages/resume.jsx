import React from 'react';
import { Button, Card } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const ResumePage = () => {
  const handleDownload = () => {
    // Implement file download functionality here
    // For example, you could trigger the browser to download a file hosted on your server
    window.location.href = '../assets/HunterReedResume.pdf';
  };

  return (
    <div className="resume-page" style={{ padding: '24px', backgroundImage: '../assets/HunterReedResume.pdf' }}>
      <Card
        bordered={false}
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        {/* If you want to display the resume content directly on the page, you can include it here */}
        <h1>Your Resume</h1>
        <p>Details about your qualifications and experiences...</p>
        
        {/* If you want to embed a PDF viewer, uncomment the following line */}
        <iframe src='../assets/HunterReedResume.pdf' style={{ width: '100%', height: '500px' }} frameBorder="0" />

        <Button
          type="primary"
          icon={<DownloadOutlined />}
          size="large"
          onClick={handleDownload}
        >
          Click to Download Resume
        </Button>
      </Card>
    </div>
  );
};

export default ResumePage;
