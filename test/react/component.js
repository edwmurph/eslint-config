import React from 'react';

const a = 'a';

const AccessDenied = () => {
  return (
    <>
      <h1 asd asdfa className={a} asdf='fdsa'>Access Denied</h1>
      <h1
        className='aaa'
        fdsa={{ a: 1 }}
        asdf='fdsa'
      >
        {
          a && <>
            asdf
          </>
        }
        Access Denied
      </h1>
      <div firstName='john'/>
      <p>
        <a
          href='/api/auth/signin'
          asdf='fdsa'
          onClick={
            (e) => {
              e.preventDefault();
              console.log('signing in');
            }
          }
        >
          You must be signed in to view this page
        </a>
      </p>
    </>
  );
};

export default AccessDenied;
