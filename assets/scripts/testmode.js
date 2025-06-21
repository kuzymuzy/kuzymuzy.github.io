let bacendserv = "https://gameapi.kuzymuzy.ru";
let testmode = getCookie("testmode");
if (testmode){
    bacendserv = "http://localhost:8888";
} else {
    bacendserv = "https://gameapi.kuzymuzy.ru";
}
function testmodeon() {
    setCookie("testmode", "true", 365)
    setCookie("authToken", "2a615a2e-ccd9-48ab-90e6-0f631fe4e91a", 365)
    setCookie("userid", "14882200998888", 365)
}