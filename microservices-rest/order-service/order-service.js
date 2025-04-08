const express = require('express');
const app = express();
app.use(express.json());

app.post("/pedidos", (req, res) => {
    const pedido = req.body;
    console.log("pedido recebido", pedido);
    res.send({message: "Pedido recebido com sucesso", pedido});
})
app.listen(4000, () => console.log("Order Service running on port 4000"));