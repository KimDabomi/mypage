const DBPool = require("../helper/DBPool");
const departmentService = require("../services/DepartmentService");

(async () => {
    try {
        let result = await departmentService.getList();
        console.log(result);
    } catch (e) {
        console.error(e);
    } finally {
        DBPool.close();
    }
})();
