const DBPool = require('../helper/DBPool');
const departmentService = require('../services/DepartmentService');

(async () => {
    try {
        const params = { deptno: 101 };
        let result = await departmentService.getItem(params);
        console.log(result);
    } catch (e) {
        console.error(e);
    } finally {
        DBPool.close();
    }
})();