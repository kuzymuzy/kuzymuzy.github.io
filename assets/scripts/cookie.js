function setCookie(name, value, days) {
    const expires = days
        ? "; expires=" + new Date(Date.now() + days * 864e5).toUTCString()
        : "";
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


function deleteCookie(name) {
    setCookie(name, "", -1);
}