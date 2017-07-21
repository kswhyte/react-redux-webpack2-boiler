const getJWT = () => {
    const jwt = JSON.parse(window.localStorage.getItem('jwt'));
    if(jwt!=undefined && jwt!=null && jwt.token!=null)
    {
        const jwttoken='Bearer' +' ' +jwt.token;
        return jwttoken;
    }
    else
    {
        window.localStorage.removeItem('jwt');
        window.localStorage.removeItem('userProfile');
        window.location = '/uisvc/v1_0/oas-bp-web/HGAccount/LogOff';
    }
};


export default getJWT;