const dismissedKeys = "_dismissed";

export const getDismissedKeys = () => {
    const dismissed = localStorage.getItem(dismissedKeys);
    return dismissed ? JSON.parse(dismissed) : {};
};

export const setDisMissedKey = (key) => {
    const dismissed = getDismissedKeys();
    dismissed[key] = key;
    localStorage.setItem(dismissedKeys, JSON.stringify(dismissed));
};

export const deleteDismissedKey = (key) => {
    const dismissed = getDismissedKeys();
    if (key in dismissed) {
        delete dismissed[key];
    }
    localStorage.setItem(dismissedKeys, JSON.stringify(dismissed));
};
