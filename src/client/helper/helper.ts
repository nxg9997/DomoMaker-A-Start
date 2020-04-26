// console.log('hi from helper');

// - defines a fetch request type
interface FetchReq {
  method: string;
  body?: string | Blob | ArrayBufferView | ArrayBuffer | FormData |
    URLSearchParams | ReadableStream<Uint8Array> | null | undefined;
  headers?: Headers | string[][] | Record<string, string> | undefined;
}

// - redirects to the given path
const redirect = (path: Location) => {
  window.location = path;
};

// - sends an ajax call based on the action (path), and a data object
const sendAjax = (action:string, data:any) => {
  $.ajax({
    data,
    cache: false,
    type: 'POST',
    url: action,
    dataType: 'json',
    success: (result, status, xhr) => {

      window.location = result.redirect;
    },
    error: (xhr, status, error) => {
      const messageObj = JSON.parse(xhr.responseText);

        // handleError(messageObj.error);
    },
  });
};
