const service = require("./search.service");



function list(req, res, next) {

    async function apiData() {
        console.log("hey")
        const typeList = await service.list()
        
        res.json({ data: typeList })
    }

    apiData()

}

function read(req, res, next) {


}

function findItemId(req, res, next) {
    const itemStr = req.params.item_name

}
async function search() {
    const itemStr = req.query.item_name;
    const data = await service.find(itemStr)

    res.json({ data })
}





module.exports = {
    list,
    read,
    search: [findItemId, search],
}