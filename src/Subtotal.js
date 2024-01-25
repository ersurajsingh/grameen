import React from 'react';
import { NumericFormat } from 'react-number-format';
import "./Subtotal.css";

function Subtotal() {
  return (
    <div className='subtotal'>
      <NumericFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):
              <strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}  // Update this value based on your actual logic
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;
