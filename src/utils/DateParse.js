import React from 'react'

export const dateParse = (date) => {
    const newDate = new Date(Date.parse(date));
    if (!isNaN(newDate) && newDate) {
        const parsedDate = `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
        return <time>{parsedDate}</time>;
    }
    return <p> - </p>;
};