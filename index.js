const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3306;

app.use(express.json());

// การเชื่อมต่อฐานข้อมูล
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'webrestaurant'
});

db.connect(err => {
  if (err) {
    console.error('เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล:', err);
    return;
  }
  console.log('เชื่อมต่อฐานข้อมูล MySQL สำเร็จ');
});

// CRUD Operations

// Create
app.post('/menu', (req, res) => {
  const { name, price, img } = req.body;
  console.log('Received data:', { name, price, img });

  const query = 'INSERT INTO Menu (name, price, img) VALUES (?, ?, ?)';
  db.query(query, [name, price, img], (err, results) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json({ msg: "Data inserted successfully" });
  });
});

// Read
app.get('/menu', (req, res) => {
  db.query('SELECT * FROM Menu', (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.status(500).send(err);
    }
    res.status(200).send(results);
  });
});

// Update
app.put('/menu/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, img } = req.body;
  console.log('Updating data:', { id, name, price, img });

  const query = 'UPDATE Menu SET name = ?, price = ?, img = ? WHERE id = ?';
  db.query(query, [name, price, img, id], (err, results) => {
    if (err) {
      console.error("Error updating data:", err);
      return res.status(500).send(err);
    }
    if (results.affectedRows === 0) {
      return res.status(404).send({ message: 'ไม่พบรายการเมนูนี้' });
    }
    res.status(200).send({ id, name, price, img });
  });
});

// Delete
app.delete('/menu/:id', (req, res) => {
  const { id } = req.params;
  console.log('Deleting data with id:', id);

  const query = 'DELETE FROM Menu WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error deleting data:", err);
      return res.status(500).send(err);
    }
    if (results.affectedRows === 0) {
      return res.status(404).send({ message: 'ไม่พบรายการเมนูนี้' });
    }
    res.status(200).send({ message: 'ลบรายการเมนูสำเร็จ' });
  });
});

app.listen(port, () => {
  console.log(`เซิร์ฟเวอร์กำลังทำงานที่ http://localhost:${port}`);
});
