const form = document.querySelector('form');
const error_list = document.querySelector('.errors');

/**
 * Logs the birthday information.
 *
 * @param {Array} birthday - An array containing the year, month, and day of the birthday
 * @return {Object} The date object containing the year, month, and day
 */
function log_birthday(birthday) {
  const date = {
    year: birthday[0],
    month: birthday[1],
    day: birthday[2],
  };
  return date;
}

/**
 * Custom form validation
 * 'errors' array will hold validation error
 *
 * @param {Object} event - The event object
 * @return {boolean} Whether the form submission should continue
 */
function handle_submit(event) {
  event.preventDefault();
  console.group('Form submission');
  console.log(form);
  console.log(form?.elements);
  console.log(form?.elements['name'].value);
  console.log(form?.elements['birthday'].value);
  console.groupEnd();

  /**
   * Custom form validation
   * 'errors' array will hold validation error
   */
  const errors = [];

  // An example of a custom validaiton check
  if (form.elements['name'].value.length < 2) {
    errors.push('Name must be at least three characters.');
    form.elements['name'].focus();
  }

  /**
   * After all of the validation checks, if the
   * 'errors' array isn't empty, build a list of
   * errors and show it under the form. The
   * 'return false' statement will end the function
   * so the form submission will stop until the
   * user addresses the errors.
   */
  if (errors.length) {
    errors.forEach((error) => {
      const li = document.createElement('li');
      const text = document.createTextNode(error);

      li.appendChild(text);
      console.log('errors', errors);
      error_list.appendChild(li);
      error_list.hidden = 0;
    });
    return false;
  } else {
    error_list.hidden = 1;
    error_list.innerHTML = '';
  }

  const date_object = log_birthday(form.elements['birthday'].value.split('-'));
  console.log('date_object', date_object);
  // Now you have the date information...
}

if (form) {
  form.addEventListener('submit', handle_submit, false);
}