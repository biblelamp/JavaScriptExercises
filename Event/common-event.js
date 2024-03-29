/**
 * Event handler for a form submit event.
 *
 * @param {SubmitEvent} event
 */
async function handleFormSubmit(event) {

    /* 
     * This prevents the default behaviour of the browser submitting
     * the form so that we can handle things instead
     */
    event.preventDefault();

    // get the element which the event handler was attached to.
    const form = event.currentTarget;

    // get url action from form
    const url = form.action;

    // get method from form
    const method = form.target;

    try {
        const formData = new FormData(form);
        const responseData = await postFormDataAsJson({url, method, formData});
        console.log(responseData);

        window.location.replace("index.html");
    } catch (error) {
        console.error(error);
    }
}

/**
 * Helper function for POSTing data as JSON with fetch.
 *
 * @param {string} options.url - URL to POST data to
 * @param {string} optiond.method - POST/PUT/DELETE
 * @param {FormData} options.formData - `FormData` instance
 * @return {Object} - Response body from URL that was POSTed to
 */
async function postFormDataAsJson({url, method, formData}) {

    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: formDataJsonString,
    };
    console.log(fetchOptions);

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    return response.json();
}