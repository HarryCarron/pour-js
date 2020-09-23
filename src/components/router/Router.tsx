import React from 'react';

function Router(props: any) {

    


  return (
    <>
    {
        props.routes.map((r: any) => r)
    }
    </>
  );
}

export default Router;
