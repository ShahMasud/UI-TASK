import React, {useState} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Deadline = () => {
  const [deadline, setDeadline] = useState(null);

  const handleDeadlineChange = (date) => {
    setDeadline(date);
  };
  return (
    
      <div>
      <h4>Deadline</h4>
      <DatePicker
        selected={deadline}
        onChange={handleDeadlineChange}
        // placeholderText="Select a deadline"
        className="custom-datepicker" // Apply the custom CSS class
        popperClassName="custom-datepicker__calendar" // Apply the custom CSS class for the calendar
        calendarClassName="custom-datepicker__calendar" // Apply the custom CSS class for the calendar
        wrapperClassName="custom-datepicker__wrapper" // Apply the custom CSS class for the date picker wrapper
        classNamePrefix="custom-datepicker" // Prefix for custom CSS classes
        renderCustomHeader={({
          monthDate,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="custom-datepicker__header">
            <button
              className="custom-datepicker__prev-button"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              Previous
            </button>
            <span className="custom-datepicker__month-year">
              {monthDate.toLocaleString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <button
              className="custom-datepicker__next-button"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              Next
            </button>
          </div>
        )}
        // Add more custom props and configurations as needed
      />
    </div>
    
  )
}

export default Deadline