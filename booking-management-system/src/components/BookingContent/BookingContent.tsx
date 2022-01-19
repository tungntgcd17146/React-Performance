import React from 'react';

import { ViewMode } from './ViewMode/ViewMode';
import { FilterByRoom } from './FilterByRoom/FilterByRoom';
import { FilterByPrice } from './FilterByPrice/FilterByPrice';
import { FilterByDate } from './FilterByDate/FilterByDate';
import { CreateBooking } from './BookingCreate/BookingCreate';
import { BookingInfos } from './BookingInfos/BookingInfos';

import InfoProvider from '../../contexts/BookingInfosContext';

export const BookingContent = () => {
  return (
    <InfoProvider>
      <div className="row mt-3">
        <FilterByDate />
        <FilterByRoom />
        <FilterByPrice />
      </div>
      <div className="row mt-3 d-flex justify-content-between">
        <CreateBooking />
        <ViewMode />
      </div>
      <div className="row">
        <BookingInfos />
      </div>
    </InfoProvider>
  );
};
