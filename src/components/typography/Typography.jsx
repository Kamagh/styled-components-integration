import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;

const Typography = () => (
  <div>
    <div>
      <h2>Texts</h2>
      {/* <p className='text-xs fw-light'>Ultra Small Text - 12/16 Light</p>
      <hr className='mb-7' />
      <p className='text-xs fw-regular'>Ultra Small Text - 12/16 Regular</p>
      <hr className='mb-7' />
      <p className='text-xs fw-medium'>Ultra Small Text - 12/16 Medium</p>
      <hr className='mb-7' />
      <p className='text-xs fw-bold'>Ultra Small Text - 12/16 Bold</p>
      <hr className='mb-7' />
      <p className='text-sm fw-light'>Small Text - 14/20 Light</p>
      <hr className='mb-7' />
      <p className='text-sm fw-regular'>Small Text - 14/20 Regular</p>
      <hr className='mb-7' />
      <p className='text-sm fw-medium'>Small Text - 14/20 Medium</p>
      <hr className='mb-7' />
      <p className='text-sm fw-bold'>Small Text - 14/20 Bold</p>
      <hr className='mb-7' />
      <p className='text-md fw-light'>Medium Text - 16/24 Light (default)</p>
      <hr className='mb-7' />
      <p className='text-md fw-regular'>Medium Text - 16/24 Regular (default)</p>
      <hr className='mb-7' />
      <p className='text-md fw-medium'>Medium Text - 16/24 Medium (default)</p>
      <hr className='mb-7' />
      <p className='text-md fw-bold'>Medium Text - 16/24 Bold (default)</p>
      <hr className='mb-7' />
      <p className='text-lg fw-light'>Large Text Light - 18/28 Light</p>
      <hr className='mb-7' />
      <p className='text-lg fw-regular'>Large Text Regular - 18/28 Regular</p>
      <hr className='mb-7' />
      <p className='text-lg fw-medium'>Large Text Medium - 18/28 Medium</p>
      <hr className='mb-7' />
      <p className='text-lg fw-bold'>Large Text Bold - 18/28 Bold</p>
      <hr className='mb-7' />
    </div>
    <div className='col-6'>
      <h2>Titles</h2>
      <p className='h9'>Title 9 - 14/24 Bold</p>
      <hr className='mb-7' />
      <p className='h8'>Title 8 - 16/26 Bold</p>
      <hr className='mb-7' />
      <p className='h7'>Title 7 - 18/30 Bold</p>
      <hr className='mb-7' />
      <h6>Title 6 - 22/36 Bold</h6>
      <hr className='mb-7' />
      <h5>Title 5 - 26/40 Bold</h5>
      <hr className='mb-7' />
      <h4>Title 4 - 28/42 Bold</h4>
      <hr className='mb-7' />
      <h3>Title 3 - 32/48 Bold</h3>
      <hr className='mb-7' />
      <h2>Title 2 - 40/60 Bold</h2>
      <hr className='mb-7' />
      <h1>Title 1 - 46/64 Bold</h1>*/}
    </div>
  </div>
);

export default Typography;
