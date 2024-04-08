chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.contentUrl) {
        chrome.downloads.download({
            url: message.contentUrl
        }, downloadId => {
            // If needed, you can handle the download ID here
        });
    }
});