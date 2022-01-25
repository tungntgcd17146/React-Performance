import React from 'react';

import { ViewMode } from './SortByPrice/SortByPrice';
import { Filter } from './Filter/Filter';
import { BookingCreate } from './BookingCreate/BookingCreate';
import { BookingInfos } from './BookingInfos/BookingInfos';

import InfoProvider from '../../contexts/BookingInfosContext';

export const BookingContent = () => {
  return (
    <InfoProvider>
      <div className="row mt-3">
        <Filter />
      </div>
      <div className="row mt-5 d-flex justify-content-between">
        <BookingCreate />
        <ViewMode />
      </div>
      <div className="row">
        <BookingInfos />
      </div>
    </InfoProvider>
  );
};
