//4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.
let suvenir = prompt('Suvenier');
 let bezdulish = prompt('Bezdulishka');
 let suvenir2 = suvenir*75;
 let bezdulish2 = bezdulish*112;

 document.write("Общий покупак: "+(suvenir2+bezdulish2)+" гр"+"<br>");
