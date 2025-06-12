# Kafka - egyszerű példa és lokális indítás

Ebben a repóban egy egyszerű Kafka példát találhatsz, amely bemutatja, hogyan lehet lokálisan elindítani a Kafka szervert UI kiegészítővel, és hogyan lehet üzeneteket küldeni és fogadni.

A producer és consumer kódok a producer.js és consumer.js fájlokban találhatók. A producer üzeneteket küld a Kafka szerverre, míg a consumer fogadja azokat.

## Megjegyzés

Ez a példa csak oktatási célokat szolgál, és nem tartalmazza a teljes körű hiba- és adatkezelést. A kód egyszerűsített, hogy könnyen érthető legyen a Kafka működése. Valós projektnél általában valamilyen keretrendszerbe integrálva használják a Kafka-t, mint például Spring Boot, NestJS vagy más hasonló technológiák.

## Előfeltételek

- Legyen Docker a gépedre telepítve és épp futó példányban.
- Legyen Node.js telepítve a gépeden.

## Kafka szerver (+ zookeeper + kafka ui) indítása lokálisan

```
docker compose up -d
```

## Példakód kipróbálás menete

### Először telepítened kell a szükséges csomagokat. Ehhez használd a következő parancsot:

```
npm install
```

### A függőségek telepítése után indítsd el a consumer-t:

```
npm run start:consumer
```

Ez elindítja a consumer-t, amely folyamatosan futni fug amíg le nem állítod és fogadja a Kafka szerverre küldött üzeneteket.

### Ezután indítsd el a producer-t:

```
npm run start:producer
```

Ez elindítja a producer-t, amely elindulása után csatlakozik a Kafka szerverhez és elküld egy üzenetet majd leáll.
