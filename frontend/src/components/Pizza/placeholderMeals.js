const mealsList = [
    {
      "productId": 1,
      "productName": "Mexicana",
      "productType": "Pizza",
      "description": "sos salsa, sos serowy z chilli, ser mozzarella, pierś z kurczaka, salami pepperoni, papryczki chilli, kukurydza, fasola, czerwona cebula, nachosy, oregano",
      "price": 38.99,
      "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/8rgPPh3YUU_nachos.jpg"
    },
    {
      "productId": 2,
      "productName": "Chorizord",
      "productType": "Pizza",
      "description": "sos pomidorowy, ser mozzarella, kiełbasa chorizo, papryczki jalapeno, oliwki, sos bazyliowy, bazylia, oregano",
      "price": 41.99,
      "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/chorizo.jpg"
    },
    {
        "productId": 3,
        "productName": "Prima Sort",
        "productType": "Pizza",
        "description": "sos pomidorowy z czosnkiem, ser mozzarella, salami, krewetki, boczek, cebula, oliwki, oregano",
        "price": 36.99,
        "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/primavera.jpg"
      },
      {
        "productId": 4,
        "productName": "Marynarska",
        "productType": "Pizza",
        "description": "sos czosnkowy, ser mozzarella, krewetki, łosoś, oliwki, parmezan, pomidorki cherry, oregano",
        "price": 34.99,
        "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/marinara%20v2.jpg"
      },
      {
        "productId": 5,
        "productName": "Rzeźnik",
        "productType": "Pizza",
        "description": "sos barbecue, ser mozzarella, szynka, boczek, salami, kabanos, kiełbasa, ogórek kwaszony, oregano",
        "price": 40.99,
        "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/di%20carne.jpg"
      },
      {
        "productId": 6,
        "productName": "Jajówa",
        "productType": "Pizza",
        "description": "sos czosnkowy, ser mozzarella, kurczak, pomidory, brokuły, jajko, oregano",
        "price": 44.99,
        "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/sorento%20v2.jpg"
      },
      {
        "productId": 7,
        "productName": "Hotówa",
        "productType": "Pizza",
        "description": "sos pomidorowy, ser mozzarella, salami pepperoni, papryczki jalapeno, papryczka pepperoni, cebula, oregano",
        "price": 42.99,
        "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/america%20hot.jpg"
      },
      {
        "productId": 8,
        "productName": "Studencka",
        "productType": "Pizza",
        "description": "Sos pomidorowy, ser mozzarella, szynka, pieczarki, oregano",
        "price": 21.99,
        "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/capriciossa.jpg"
      },
      {
        "productId": 9,
        "productName": "Penne Salmone",
        "productType": "Makaron",
        "description": "makaron penne z wędzonym łososiem, brokułami i czosnkiem w sosie śmietanowym z dodatkiem świeżych ziół oraz sera grana padano",
        "price": 25.99,
        "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/penne%20salmone%20v2.jpg"
      },
      {
        "productId": 10,
        "productName": "Fusilli Brocoli",
        "productType": "Makaron",
        "description": "makaron fusilli bucati z szynką, brokułami, czonskiem i serem grana padano,makaron fusilli bucati z szynką, brokułami, czonskiem i serem grana padano,w sosie śmietanowym z dodatkiem ziół i świeżej pietruszki",
        "price": 26.99,
        "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/fusili%20brocoli.jpg"
      },
      {
        "productId": 11,
        "productName": "Tagliatelle Rukola",
        "productType": "Makaron",
        "description": "makaron tagliatelle z kurczakiem, szpinakiem, cebulą, serem camembert, pomidorkami cherry i ziołami w sosie śmietanowo-serowym podawany z rukolą i serem grana padano",
        "price": 23.99,
        "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/taglaitelle%20rukola.jpg"
      },
      {
        "productId": 12,
        "productName": "Penne Pomidorro",
        "productType": "Makaron",
        "description": "makaron penne z kurczakiem, suszonymi pomidorami, smażony na maśle makaron penne z kurczakiem, suszonymi pomidorami, smażony na maśle z czerwoną cebulą, pomidorkami cherry i rukolą w sosie mascarpone z dodatkiem papryki i ziół",
        "price": 21.99,
        "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/pomodoro.jpg"
      },
      {
        "productId": 13,
        "productName": "El Grecco",
        "productType": "Salatka",
        "description": "ser feta, mix sałat, pomidor, ogórek, czerwona cebula, papryka, oliwki, kiełki, pestki słonecznika, sos winegret",
        "price": 25.99,
        "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/grecka.jpg"
      },
      {
        "productId": 14,
        "productName": "Mozzarello",
        "productType": "Salatka",
        "description": "biała mozzarella, mix sałat, pomidorki cherry, rukola, czerwona cebula, czarne oliwki, sos winegret",
        "price": 21.99,
        "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/mozarella.jpg"
      },
      {
        "productId": 15,
        "productName": "Pera",
        "productType": "Salatka",
        "description": "kurczak, mix sałat, rukola, ser pleśniowy, gruszka, pomidorki cherry, pestki słonecznika, sos winegret",
        "price": 21.99,
        "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/pera.jpg"
      },
      {
        "productId": 16,
        "productName": "Salami",
        "productType": "Salatka",
        "description": "smażone salami, mix sałat, pomidor, ogórek, czerwona cebula, papryka, jajko sadzone, szczypiorek, sos czosnkowo-jogurtowy",
        "price": 28.99,
        "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/salami.jpg"
      },
      {
        "productId": 17,
        "productName": "Nicejska",
        "productType": "Salatka",
        "description": "tuńczyk, mix sałat, pomidor, ogórek, czerwona cebula, papryka, oliwki, kiełki, sos winegret",
        "price": 21.99,
        "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/nicejska.jpg"
      },
      {
        "productId": 18,
        "productName": "Pizza bambini 20cm",
        "productType": "Dzieciece",
        "description": "pizza 20 cm z szynką, serem mozzarella na sosie pomidorowym ",
        "price": 15.99,
        "pictureUrl": "https://rukola.com.pl/uploads/imgs/thumb/bambini.jpg"
      },
      {
        "productId": 19,
        "productName": "Nuggetssy",
        "productType": "Dzieciece",
        "description": "Nuggetsy z kurczaka z łódeczkami ziemniaczanymi i warzywami",
        "price": 17.99,
        "pictureUrl": "https://www.przyslijprzepis.pl/media/cache/big/uploads/media/recipe/0008/94/nuggetsy.jpeg"
      },
      {
        "productId": 20,
        "productName": "Krążki cebulowe",
        "productType": "Dodatki",
        "description": "150g krążków cebulowych",
        "price": 15.99,
        "pictureUrl": "https://www.justataste.com/wp-content/uploads/2013/01/beer-battered-onion-rings.jpg"
      },
      {
        "productId": 21,
        "productName": "Frytki z batata",
        "productType": "Dodatki",
        "description": "150g frytek z batata",
        "price": 17.99,
        "pictureUrl": "https://www.kobieta.pl/media/cache/default_view/uploads/media/default/0002/18/e74f4b8b651b87d4297d8a66ca7d04ada55d683d.jpeg"
      },
      {
        "productId": 22,
        "productName": "Frytki z ziemniaka",
        "productType": "Dodatki",
        "description": "150g frytek belgijskich",
        "price": 13.99,
        "pictureUrl": "https://cdn.aniagotuje.com/pictures/articles/2020/05/3979768-v-1500x1500.jpg"
      },
      {
        "productId": 23,
        "productName": "Dodatkowy sos",
        "productType": "Dodatki",
        "description": "Do wyboru: czosnkowy, pomidorowy, tzatziki, chili, tysiąca wysp, BBQ, ketchup",
        "price": 3.99,
        "pictureUrl": "https://1.bp.blogspot.com/-eGLSFr1Smmk/YIZ76xUlhTI/AAAAAAAASYU/DF_LwyH9Ibcuu7JCvYKtyvS6QQJTDLw2QCPcBGAYYCw/s800/3%2Bsosy%2Bna%2Bimprez%25C4%2599%2Bi%2Bdo%2Bgrilla%2B-%2Bzrobisz%2Bje%2Bw%2Bkilka%2Bminut%2B%25281%2529.JPG"
      },
      {
        "productId": 24,
        "productName": "Coca-Cola",
        "productType": "Napoje",
        "description": "500ml",
        "price": 7.99,
        "pictureUrl": "https://www.carrefour.pl/images/product/org/cocacola-napoj-gazowany-15-l-1c8d0t.jpg"
      },
      {
        "productId": 25,
        "productName": "Lipton Green Ice Tea",
        "productType": "Napoje",
        "description": "500ml",
        "price": 7.99,
        "pictureUrl": "https://samujacka.sklepkupiec.pl/867759-thickbox_default/lipton-ice-tea-green-napoj-niegazowany-15-l.jpg"
      },
      {
        "productId": 26,
        "productName": "Lipton Lemon Ice Tea",
        "productType": "Napoje",
        "description": "500ml",
        "price": 7.99,
        "pictureUrl": "https://polskikoszyk.pl/media/catalog/product/cache/1/thumbnail/280x280/040ec09b1e35df139433887a97daa66f/97659/lipton-ice-tea-lemon-napoj-niegazowany-500-ml-herbata-mrozona-napoje-kawa-i-herbata_0.png"
      },
      {
        "productId": 27,
        "productName": "Woda",
        "productType": "Napoje",
        "description": "500ml",
        "price": 4.99,
        "pictureUrl": "https://www.carrefour.pl/images/product/org/naleczowianka-naturalna-woda-mineralna-niegazowana-05-l-3fm4rc.jpg"
      },
  ];

export default mealsList;