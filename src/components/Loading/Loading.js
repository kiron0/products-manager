import { Button, Spinner } from "react-bootstrap";
import React from "react";

const Loading = () => {
  return (
    <div style={{height: '100vh'}} className="w-100 d-flex justify-content-center align-items-center">
      <Button variant="dark" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  );
};

export default Loading;
