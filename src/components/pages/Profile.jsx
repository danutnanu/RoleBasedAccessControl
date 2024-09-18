import React from 'react';

function Profile() {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    roles: ['admin', 'moderator'],
    permissions: ['read', 'write', 'delete']
  };
  return (
    <>
      <h1 className="text-center">Profile</h1>
      <div className="row border border-dark">
        <div className="col-md-6">
          <h2>User Information</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
        <div className="col-md-6">
          <h2>Role Information</h2>
          <p>Roles: {user.roles.join(', ')}</p>
          <p>Permissions: {user.permissions.join(', ')}</p>
        </div>
      </div>
      
      <div className="row border border-dark">
        <div className="col-md-12">
          <h2>Account Settings</h2>
          <form>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
