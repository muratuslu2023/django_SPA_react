const setFavicon = (url) => {

    const link =
    document.querySelector("link[rel~='icon']") ||
    document.createElement('link');
    link.rel = 'icon';
    link.href = url;

    document.getElementsByTagName('head')[0].appendChild(link);


};

export {setFavicon};