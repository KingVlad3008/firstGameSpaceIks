"use strict"
alert("Загрузка терминала...");
alert("Авторизция в системе...");
alert("Вход выполнен успешно.");
alert("Приветствую вас, Капитан Союзного Боевого Судна - Антилопа-R74.");
alert("Я Электронный Помошник Антилопы - ЭЛПА.");
alert(`В мои задачи входит:
уведомление об обязаннстях и поставленных задачах,
анализ происходящих событий и выявление оптимальных решений,
выдача общих советов по командованию.
`);
alert(`Начальство Военных Космических Сил Союза отобрало вас на эту должность
и теперь вы являетесь полноправным капитаном данного судна,
который действует в интересах НВКСС и подчиняется его приказам`);
let name = prompt(`Для начала скажите, как я могу к вам обращаться?`, "Введите ваше имя");
   if (name === null) {
     name = "Аноним";
     alert(`Вы посчитали остаться неизвестным,
ваша просьба будет отправленна в НВКСС на рассмотрение.
Пока что система будет вас индефицировать как "Аноним".`);
   }
alert(`Добро пожаловать на борт, ${name}!`);
