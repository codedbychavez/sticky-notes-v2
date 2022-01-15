// Define Variables

const createDraftStickyURL = 'http://localhost:8000/sticky/sticky';

export const StickyService = {

    // Stick

    addSticky: async (sticky) => {
        return postData(createDraftStickyURL, sticky);
    }
    
    }


// Helper functions

async function postData(url, data) {
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch(url, requestOptions)
}