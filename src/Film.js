import React from 'react';

// functional component:
// this is how default prop values are supplied in a functional component
const Film = ({title="No title provided", year="No year provided"}) => <li>{title} ({year})</li>

export default Film;