import React, { useState } from 'react';
import { Box, Button, TextInput, Notification } from 'grommet';
import { Clipboard } from 'grommet-icons';

const CopyEmailToClipboard = () => {
  const [emailCopy] = useState('salnikovtimofeyof@gmail.com');
  const [notification, setNotification] = useState({ visible: false, message: '' });

  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailCopy).then(() => {
        setNotification({ visible: true, message: 'Email copied to clipboard!' });
        setTimeout(() => setNotification({ visible: false, message: '' }), 2000);
      }).catch((err) => {
        console.error('Failed to copy: ', err);
        fallbackCopy(); 
      });
    } else {
      fallbackCopy();
    }
  };

  const fallbackCopy = () => {
    const textarea = document.createElement('textarea');
    textarea.value = emailCopy;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      setNotification({ visible: true, message: 'Email copied to clipboard!' });
      setTimeout(() => setNotification({ visible: false, message: '' }), 2000);
    } catch (err) {
      console.error('Fallback copy failed: ', err);
    } finally {
      document.body.removeChild(textarea);
    }
  };

  return (
    <Box>
      <Box direction="row" align="left" size="large" round="small" border>
        <TextInput 
          plain 
          type="text" 
          value={emailCopy} 
          size="small" 
          readOnly
        />
        
        <Box border={{ color: 'dark-4', side: 'left' }}>
          <Button
            icon={<Clipboard color="#696969" size="medium" />}
            margin={{ right: 'xsmall' }}
            onClick={handleCopy}
          />
        </Box>
      </Box>

      {notification.visible && (
        <Notification 
          message={notification.message} 
          onClose={() => setNotification({ visible: false, message: '' })} 
        />
      )}
    </Box>
  );
};

export default CopyEmailToClipboard;
