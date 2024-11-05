const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE",
  );
  next();
});
app.use(express.json())

const menuItems = [
  { id: 1, name: 'สปาเกตตี้แฮมเห็ด', price: 110, image: 'https://inwfile.com/s-cy/8avqkv.jpg' },
  { id: 2, name: 'กะเพราะหมูกรอบ', price: 80, image: 'https://i.ytimg.com/vi/16Odh9KFPK0/maxresdefault.jpg' },
  { id: 3, name: 'ข้าวขาหมูเยอรมัน', price: 100, image: 'https://img.wongnai.com/p/400x0/2019/06/14/5f9da9d4fb2446548bb7aeed0ff688c2.jpg' },
  { id: 4, name: 'ข้าวหน้าเนื้อ', price: 120, image: 'https://api2.krua.co/wp-content/uploads/2022/07/RI1765_Gallery_-01.jpg' },
  { id: 5, name: 'สเต็กเนื้อ', price: 120, image: 'https://www.calforlife.com/image/food/Beefsteak.jpg' },
];

const menumain = [
  { name: 'กะเพราะหมูกรอบ', price: 80, image: 'https://i.ytimg.com/vi/16Odh9KFPK0/maxresdefault.jpg' },
  { name: 'หมี่กรอบผัดซีอิ๊ว', price: 60, image: 'https://img.wongnai.com/p/l/2017/11/27/de6df13f67284c978aca21e3a0c52218.jpg' },
  { name: 'ก๋วยเตี๋ยวคั่วไก่', price: 70, image: 'https://s3-ap-southeast-1.amazonaws.com/photo.wongnai.com/photos/2017/03/29/a3b7af34297c416e90e9c1694ffd206c.jpg' },
  { name: 'สุกี้แห้งไก่', price: 60, image: 'https://img.wongnai.com/p/l/2017/05/29/6988f264122945718442c9e258babdcb.jpg' },
  { name: 'ข้าวหมูแดง', price: 60, image: 'https://img.wongnai.com/p/1920x0/2018/07/03/ed7ed753c9f5433fa1afa1a3bfb83796.jpg' },
  { name: 'ข้าวหมูแดงหมูกรอบ', price: 75, image: 'https://static.thairath.co.th/media/dFQROr7oWzulq5FZX9z21BD6BkebjldCkR4f9gV00c9oK5ObfveJSI516A5C0jFDXvC.webp' },
  { name: 'ข้าวขาหมูเยอรมัน', price: 100, image: 'https://img.wongnai.com/p/400x0/2019/06/14/5f9da9d4fb2446548bb7aeed0ff688c2.jpg' },
  { name: 'ข้าวหน้าเนื้อ', price: 120, image: 'https://api2.krua.co/wp-content/uploads/2022/07/RI1765_Gallery_-01.jpg' },
  { name: 'สเต็กเนื้อ', price: 120, image: 'https://www.calforlife.com/image/food/Beefsteak.jpg' },
  { name: 'ข้าวผัดอเมริกัน', price: 115, image: 'https://img.wongnai.com/p/l/2017/05/29/8516e11c77244de6a5f6ac74faa138c5.jpg' },
  { name: 'ข้าวหน้าหมูทอด', price: 65, image: 'https://img.wongnai.com/p/1920x0/2018/05/25/bc59677defba440b9d6a4507b903df65.jpg' },
  { name: 'ข้าวยำไก่แซ่บ', price: 65, image: 'https://img.wongnai.com/p/1920x0/2020/11/07/95ce4ec6055a4e02a650c1c58dd41849.jpg' },
  { name: 'หอยทอด', price: 75, image: 'https://img.wongnai.com/p/l/2017/05/29/5309d0a9b15d4907b6389b6a6787fc7e.jpg' },
  { name: 'ข้าวน้ำพริกกะปิปลาทู', price: 75, image: 'https://img.wongnai.com/p/1920x0/2018/03/01/a47f84a3a653472cb86d4874ac22e2fe.jpg' },
{ name: 'สปาเกตตี้แฮมเห็ด', price: 110, image: 'https://inwfile.com/s-cy/8avqkv.jpg' },
];

const menusnack =
[
    { name: 'นักเก็ต', price: 50, image: 'https://cdn8.devgodigit.net/wp-content/uploads/2021/09/30191243/051052534_F.jpg' },
    { name: 'ไก่ทอด', price: 30, image: 'https://i.ytimg.com/vi/60xSNZvr7Ck/maxresdefault.jpg' },
    { name: 'ไส้กรอกทอด', price: 40, image: 'https://fit-d.com/uploads/food/16cca95edc9ab6185c8720bed16ae178.jpg' },
    { name: 'ไก่จ๊อ', price: 45, image: 'https://www.sgethai.com/wp-content/uploads/2022/09/220908-Content-%E0%B9%81%E0%B8%88%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3%E0%B9%84%E0%B8%81%E0%B9%88%E0%B8%88%E0%B9%8A%E0%B8%AD02.webp' },
    { name: 'ชีสบอล', price: 40, image: 'https://i.ytimg.com/vi/2Sdsm37ID5Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD2gtZijNMm8apP57QFeRD_dduotQ' },
    { name: 'เกี๊ยวซ่า', price: 30, image: 'https://www.thevschool.com/wp-content/uploads/2023/04/Gyoza-Cooking-683x1024.jpg' },
    { name: 'เฟรนฟราย', price: 40, image: 'https://cdn.discordapp.com/attachments/1141665169718648833/1287128403308183612/IMG_7190.jpg?ex=66f06b3d&is=66ef19bd&hm=694a1858eae14c5435fd50d8e43fdd999c6af7c3cc316df9dfdeff221608e955&' },
    { name: 'หอมทอด', price: 40, image: 'https://img-global.cpcdn.com/recipes/7334986d3c4fbd44/1200x630cq70/photo.jpg' },
    { name: 'ปอเปี๊ยะทอด', price: 40, image: 'https://f.ptcdn.info/471/066/000/pzkfhm47yw41WsErIf3d-o.jpg' },
    { name: 'เกี๊ยวทอด', price: 40, image: 'https://cdn.discordapp.com/attachments/1141665169718648833/1287129448814084157/IMG_7192.jpg?ex=66f06c36&is=66ef1ab6&hm=63bfef99cab52cf18d96abb65b2a84b2b7582c858e6e82f1445372f8d4f41ec3&' }
];

const menudrink =
[
   { name: 'น้ำเปล่า', price: 10, image: 'https://medhubnews.com/sites/2320/files/u/00%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B8%AA%E0%B8%B1%E0%B8%9B%E0%B8%94%E0%B8%B2%E0%B8%AB%E0%B9%8C/ThaiNamthip.jpg' },
   { name: 'เป็ปซี่', price: 20, image: 'https://britishop.com/storage/imgcache/Pepsi-can-245-ml-__960x960xsquare.jpg' },
   { name: 'สไปรท์', price: 20, image: 'https://down-th.img.susercontent.com/file/sg-11134201-23020-54oc0pxb12mv41' },
   { name: 'โค้ก', price: 20, image: 'https://gda.thai-tba.or.th/wp-content/uploads/2018/07/coke-full-red-325-ml-hires.png' },
   { name: 'แฟนต้า น้ำแดง', price: 20, image: 'https://sentosakhonkaen.com/wp-content/uploads/2021/07/S_0036_8851959135174.jpg' },
   { name: 'แฟนต้า น้ำส้ม', price: 20, image: 'https://www.cokeshopth.com/pub/media/catalog/product/cache/e0b9252e27a8956bf801d8ddef82be21/3/2/325-fanta-orange-web2.jpg' },
   { name: 'แฟนต้า น้ำเขียว', price: 20, image: 'https://sentosakhonkaen.com/wp-content/uploads/2021/07/S_0035_8851959135181.jpg' },
   { name: 'โกโก้เย็น', price: 45, image: 'https://api2.krua.co/wp-content/uploads/2020/07/RD0198_Gallery_-01-scaled.jpg' },
   { name: 'ชาเย็น', price: 45, image: 'https://cdn.discordapp.com/attachments/1201175043988783135/1287124575842209945/IMG_4940.jpg?ex=66f067ac&is=66ef162c&hm=df518fd9c6115c4ac457fd5ee56937a7b07257a793c9f9c006794eac41e7c0b0&' },
   { name: 'ชาเขียวเย็น', price: 45, image: 'https://yalamarketplace.com/upload/1658399714294.jpg' },
   { name: 'นมเย็น', price: 45, image: 'https://www.sgethai.com/wp-content/uploads/2022/06/16042024-pinkmilk-001.webp' },
   { name: 'ชามะนาว', price: 35, image: 'https://s359.kapook.com/pagebuilder/aea20974-a1b8-44d5-be43-c018b6448758.jpg' },
   { name: 'อัญชันมะนาว', price: 35, image: 'https://cdn.discordapp.com/attachments/1201175043988783135/1287124813868957706/IMG_4939.jpg?ex=66f067e5&is=66ef1665&hm=c39d3e85058950dddde6b4c5aee6f24fd0206417beb9c564913a4965bb7fbd77&' },
   { name: 'น้ำเก๊กฮวย', price: 35, image: 'https://f.ptcdn.info/343/079/000/rn73ea11ekAkF7q758J9-o.jpg' },
   { name: 'น้ำกระเจี๊ยบ', price: 35, image: 'https://yummyth.com/wp-content/uploads/2021/12/4.png' }, 
];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/menuItem',(rea,res)=>{
  if(menuItems.length>0)
    res.send(menuItems)
  else
  res.status(400).send("ไม่พบรายการอาหาร");
})

app.get('/api/menumain',(rea,res)=>{
  if(menumain.length>0)
    res.send(menumain)
  else
  res.status(400).send("ไม่พบรายการอาหาร");
})

app.get('/api/menusnack',(rea,res)=>{
  if(menusnack.length>0)
    res.send(menusnack)
  else
  res.status(400).send("ไม่พบรายการอาหาร");
})

app.get('/api/menudrink',(rea,res)=>{
  if(menudrink.length>0)
    res.send(menudrink)
  else
  res.status(400).send("ไม่พบรายการอาหาร");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
