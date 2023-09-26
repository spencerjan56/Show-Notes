import React from 'react';

function AboutPage() {
  return (
    <div className='about-page-container'>
      <h1 className='about-header'>About Spencer</h1>
      <p className='about'>
      According to my research: The error message in my console
        'Syntax error: Unexpected token (less than sign) in JSON at
        position 0' typically indicates that your JavaScript code
        is trying to parse a JSON response from an HTTP request,
        but it's receiving something other than valid JSON. In this case,
        the less than character suggests that the response is starting
        with an HTML tag or some non-JSON content.
      </p>
    </div>
  );
}

export default AboutPage;


