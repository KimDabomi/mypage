const DBPool = require('../helper/DBPool');
const departmentService = require('../services/DepartmentService');

(async () => {
    try {
        const params = { deptno: 203, dname: '헬로학과(수정)', loc: null };
        let result = await departmentService.editItem(params);
        console.log(result);
    } catch (e) {
        console.error(e);
    } finally {
        DBPool.close();
    }
})();