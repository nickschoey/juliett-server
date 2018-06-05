const db = require ('../db')

async function viewAccounts (req, res) {
  let msg = await db.viewAccounts()
  res.status = 200
  res.send(msg)
}

async function viewReceipt (req, res) {
  let msg = await db.viewReceipt(req.body)
  res.status = 200
  res.send(msg)
}

function addReceipt (req, res) {
    db.addReceipt(req.body)
    res.status= 200
    res.send('Receipt added')
}

//     EXPORTS =================================================================

exports.addReceipt = addReceipt
exports.viewAccounts = viewAccounts
exports.viewReceipt = viewReceipt