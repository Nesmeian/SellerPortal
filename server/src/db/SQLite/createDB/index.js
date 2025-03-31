import Database from "better-sqlite3";

export default function createDataBase(dbPath, rawData) {
  const { advertisements, orders } = JSON.parse(rawData);
  const db = new Database(dbPath);

  try {
    db.exec(`
      CREATE TABLE IF NOT EXISTS advertisements (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        price INTEGER NOT NULL,
        createdAt TEXT NOT NULL,
        views INTEGER DEFAULT 0,
        likes INTEGER DEFAULT 0,
        imageUrl TEXT
      );

      CREATE TABLE IF NOT EXISTS orders (
        id TEXT PRIMARY KEY,
        status INTEGER DEFAULT 0,
        createdAt TEXT NOT NULL,
        finishedAt TEXT,
        total INTEGER NOT NULL,
        deliveryWay TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS order_items (
        order_id TEXT,
        advertisement_id TEXT,
        count INTEGER NOT NULL,
        PRIMARY KEY (order_id, advertisement_id),
        FOREIGN KEY (order_id) REFERENCES orders(id),
        FOREIGN KEY (advertisement_id) REFERENCES advertisements(id)
      );
    `);

    const insertAd = db.prepare(`
      INSERT INTO advertisements (
        id, name, description, price, 
        createdAt, views, likes, imageUrl
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const insertOrder = db.prepare(`
      INSERT INTO orders (
        id, status, createdAt, 
        finishedAt, total, deliveryWay
      ) VALUES (?, ?, ?, ?, ?, ?)
    `);

    const insertOrderItem = db.prepare(`
      INSERT INTO order_items (
        order_id, advertisement_id, count
      ) VALUES (?, ?, ?)
    `);

    const insertAds = db.transaction((ads) => {
      for (const ad of ads) {
        insertAd.run(
          ad.id,
          ad.name,
          ad.description || null,
          ad.price,
          ad.createdAt,
          ad.views,
          ad.likes,
          ad.imageUrl || null
        );
      }
    });

    const insertOrders = db.transaction((orders) => {
      for (const order of orders) {
        insertOrder.run(
          order.id,
          order.status,
          order.createdAt,
          order.finishedAt || null,
          order.total,
          order.deliveryWay
        );

        for (const item of order.items) {
          insertOrderItem.run(order.id, item.id, item.count);
        }
      }
    });

    insertAds(advertisements);
    insertOrders(orders);

    const stmt = db.prepare("SELECT * FROM orders WHERE id = ?");
    const ads = stmt.all("2");
    console.log(ads);
  } finally {
    db.close();
  }
}
