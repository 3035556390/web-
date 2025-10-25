<template>
    <div class="container">
        <div class="header">
            <h1>用户管理</h1>
            <div class="search-box">
                <input type="text" placeholder="搜索用户名">
                <button>搜索</button>
            </div>
        </div>

        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>头像</th>
                        <th>干员</th>
                        <th>出生地</th>
                        <th>职业</th>
                        <th>排行</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td class="userid">{{ user.userId }}</td>
                        <td class="userphoto"><img :src="user.userphoto" alt=""></td>
                        <td class="username">{{ user.username }}</td>
                        <td class="userbirthplace">{{ user.userbirthplace }}</td>
                        <td class="userjob">{{ user.userjob }}</td>
                        <td class="userevaluate">{{ user.userevaluate }}</td>
                        <td class="actions">
                            <button class="btn btn-info">账号信息</button>
                            <button class="btn btn-add">添加角色</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

        <div style="margin-top: 20px; text-align: right;">
            <button class="add-user-btn">添加用户</button>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// 创建 axios 实例
const api = axios.create({
    baseURL: 'http://localhost:3000/user',
    timeout: 10000
})

// 响应式数据
const users = ref([])
const user = ref({})
const loading = ref(false)
const error = ref('')

// 获取用户列表
const fetchUsers = async () => {
    loading.value = true
    error.value = ''

    try {
        // 使用 axios 发送请求
        const response = await api.get('/users')
        users.value = response.data.data

        console.log(response.data.data);
        for (const user in users.value) {

            console.log(user.userId)
        }

    } catch (err) {
        error.value = '获取用户失败'
        console.error('错误详情:', err)
    } finally {
        loading.value = false
    }
}

// 组件加载时自动获取数据
onMounted(() => {
    fetchUsers()
})

</script>
<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

h1 {
    font-size: 24px;
    font-weight: 600;
    color: #1a1a1a;
}

.search-box {
    display: flex;
    gap: 10px;
}

.search-box input {
    padding: 8px 12px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    width: 200px;
}

.search-box button {
    padding: 8px 16px;
    background-color: #409eff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.search-box button:hover {
    background-color: #66b1ff;
}

.table-container {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

table {
    width: 100%;
    border-collapse: collapse;
}

thead {
    background-color: #f5f7fa;
}

th {
    padding: 12px 15px;
    text-align: left;
    font-weight: 600;
    color: #606266;
    border-bottom: 1px solid #ebeef5;
}

td {
    color: #1a1a1a;
    padding: 12px 15px;
    border-bottom: 1px solid #ebeef5;
}



tr:last-child td {
    border-bottom: none;
}

tr:hover {
    background-color: #f5f7fa;
}

.userid {
    color: #909399;
    font-size: 14px;
}

.username {
    font-weight: 500;
}

.userphoto img {
    width: 50px;
    height: 50px;
    border-radius: 50%;

}



.actions {
    display: flex;
    gap: 10px;
}

.btn {
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
    border: none;
}

.btn-info {
    background-color: #ecf5ff;
    color: #409eff;
    border: 1px solid #b3d8ff;
}

.btn-add {
    background-color: #f0f9eb;
    color: #67c23a;
    border: 1px solid #c2e7b0;
}

.btn:hover {
    opacity: 0.8;
}

.add-user-btn {
    padding: 10px 20px;
    background-color: #67c23a;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
}

.add-user-btn:hover {
    background-color: #85ce61;
}
</style>