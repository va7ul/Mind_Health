'use client';

import { getPsyhologists } from '../../(server)/api';
// import { useEffect, useState } from 'react';

export const Psyhologists = () => {
  // const [psyhologists, setPsyhologists] = useState([]);

  getPsyhologists();
  // if (data?.displayName) {
  //   setPsyhologists(data);
  // }
  // console.log(psyhologists);

  return (
    <>
      {/* {psyhologists.map(psyhologist => (
        <li key={psyhologist.name}>{psyhologist.name}</li>
      ))} */}
    </>
  );
};
