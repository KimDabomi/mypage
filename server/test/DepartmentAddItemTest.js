const DBPool = require('../helper/DBPool');
const departmentService = require('../services/DepartmentService');

(async () => {
    try {
        const params = { dname: '헬로학과', loc: null };
        let result = await departmentService.addItem(params);
        console.log(result);
    } catch (e) {
        console.error(e);
    } finally {
        DBPool.close();
    }
})();