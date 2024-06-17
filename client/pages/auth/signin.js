import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      email,
      password
    },
    onSuccess: () => Router.push('/')
  });

  const onSubmit = async event => {
    event.preventDefault();
    await doRequest();
  };

  return (
    <div style={{
      backgroundImage: 'url(/signup.svg), linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
      backgroundSize: 'cover, cover',
      backgroundBlendMode: 'overlay',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '10px',
        padding: '30px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
      }}>
        <form onSubmit={onSubmit}>
          <h1 style={{ textAlign: 'center', color: '#333' }}>Sign In</h1>
          <div className="form-group">
            <label htmlFor="email" style={{ color: '#333' }}>Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="form-control"
              style={{ borderRadius: '5px', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{ color: '#333' }}>Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="form-control"
              style={{ borderRadius: '5px', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          {errors && <div className="alert alert-danger">{errors}</div>}
          <button type="submit" className="btn btn-primary btn-block" style={{
            background: '#007bff',
            borderColor: '#007bff',
            borderRadius: '5px',
            padding: '10px',
            fontWeight: 'bold'
          }}>Sign In</button>
        </form>
      </div>
    </div>
  );
};
