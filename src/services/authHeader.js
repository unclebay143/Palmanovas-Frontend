const jwt = localStorage.getItem('token');

// Authorization token
export const authHeader = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'mode': 'no-cors',
    'Authorization': `Basic ${ jwt && accessToken}`
  }
  