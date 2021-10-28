import { readFile } from 'fs/promises';

const abortControl = async (fileName) => {

    try {
        const controller = new AbortController(); //you should node version 16.6 or higher in order to use AbortController.
        const { signal } = controller;
        const promise = readFile(fileName, { signal });
        // Abort the request before the promise settles.
        controller.abort();

        await promise;
    } catch (err) {
        // When a request is aborted - err is an AbortError
        console.error(err);
    }

}

abortControl('books.json')