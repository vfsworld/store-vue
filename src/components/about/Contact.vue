<template>
    <div class="card text-dark bg-light mb-3">
        <div class="card-header">联系我们</div>
        <div class="card-body">
            <h4 class="card-title">联系我们</h4>
            <p class="card-text">vfsmail@qq.com</p>
            <router-link :to="{name:'personLink'}">联系人</router-link>
            <router-link :to="{name:'phoneLink'}">电话</router-link>
            <p>
                <!-- 联系内容 -->
                <router-view></router-view>
            </p>
        </div>
    </div>
</template>
