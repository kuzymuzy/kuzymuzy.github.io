let bacendserv = "https://gameapi.kuzymuzy.ru";
let testmode = getCookie("testmode");
if (testmode){
    bacendserv = "http://localhost:8000";
} else {
    bacendserv = "https://gameapi.kuzymuzy.ru";
}