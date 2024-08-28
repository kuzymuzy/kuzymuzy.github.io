
    function generateRandomId(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const uniqueId = generateRandomId(9);

const adBanner = document.createElement('div');
adBanner.id = uniqueId;
adBanner.style.position = 'fixed';
adBanner.style.top = '0';
adBanner.style.left = '0';
adBanner.style.width = '100%';
adBanner.style.height = '100%';
adBanner.style.backgroundColor = '#000';
adBanner.style.color = '#fff';
adBanner.style.display = 'flex';
adBanner.style.flexDirection = 'column';
adBanner.style.justifyContent = 'center';
adBanner.style.alignItems = 'center';
adBanner.style.zIndex = '1000';
adBanner.innerHTML = `
    <div style="text-align: center; margin-top: -50px;">
        <h1>Еще не подписан на меня?</h1>
        <p>Ты шо, охрнел, быстро подписался!</p><br>
        <p id="timer-text" style="font-size: 9px; margin-top: 10px; color:#808080;">6</p><br>
        <a href="https://www.youtube.com/@Kuzy_muzy_offical" target="_blank" id="close-ad" style="padding: 10px 20px; background-color: #FF0000; color: #ffffff; text-decoration: none; border-radius: 5px; margin-top: 20px;">Закрыть</a>
    </div>
`;
document.body.appendChild(adBanner);

const closeAdBtn = document.getElementById('close-ad');
const timerText = document.getElementById('timer-text');
let timeLeft = 6;

const countdown = setInterval(() => {
    timeLeft--;
    timerText.textContent = `${timeLeft}`;
    if (timeLeft <= 0) {
        clearInterval(countdown);
        adBanner.style.display = 'none';
    }
}, 1000);

closeAdBtn.addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://www.youtube.com/@Kuzy_muzy_offical', '_blank');
    adBanner.style.display = 'none';
});
