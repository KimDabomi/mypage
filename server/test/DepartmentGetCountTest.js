const DBPool = require('../helper/DBPool');
const departmentService = require('../services/DepartmentService');

(async () => {
    try {
        let result = await departmentService.getCount();
        console.log(result);
    } catch (e) {
        console.error(e);
    } finally {
        DBPool.close();
    }
})();