import React from 'react';

import { ViewMode } from './ViewMode/ViewMode';
import { FilterByRoom } from './FilterByRoom/FilterByRoom';
import { FilterByPrice } from './FilterByPrice/FilterByPrice';
import { FilterByDate } from './FilterByDate/FilterByDate';
import { CreateBooking } from './BookingCreate/BookingCreate';
import { BookingInfos } from './BookingInfos/BookingInfos';

export const BookingContent = () => {
  return (
    <>
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
    </>
  );
};
