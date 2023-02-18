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

res.json({data: `param coming soon ${req.params.itemName}`})

}





module.exports = {
    list,
    read,
}