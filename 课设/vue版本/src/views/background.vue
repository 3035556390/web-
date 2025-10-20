<template>
    <div class="background">
        <div class="stars-container" ref="starsContainer"></div>
        <slot></slot>
    </div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const starsContainer = ref(null);
let stars = []; // 存储每颗星的信息
let rafId = null;

const createStars = () => {
    if (!starsContainer.value) return;

    const container = starsContainer.value;
    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const starCount = 200;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // 随机位置（使用 px 以便帧更新时不受百分比影响）
        const left = Math.random() * width;
        const top = Math.random() * height;

        // 大小与透明度
        const size = (Math.random() * 3 + 1).toFixed(2); // 1-4px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.opacity = (Math.random() * 0.8 + 0.2).toFixed(2); // 0.2-1.0

        // 置绝对位置（初始）
        star.style.left = `${left}px`;
        star.style.top = `${top}px`;

        // 运动参数（px / s）
        const speed = 8 + Math.random() * 40; // 下落速度 8-48 px/s
        const sway = Math.random() * 24; // 横向摆动振幅 0-24px
        const freq = 0.2 + Math.random() * 1.0; // 摆动频率
        const phase = Math.random() * Math.PI * 2; // 相位

        // 闪烁时长/延迟（仍由 CSS 控制）
        const blinkDur = (2 + Math.random() * 3).toFixed(2) + 's'; // 2-5s
        const blinkDelay = (Math.random() * 5).toFixed(2) + 's';
        star.style.animation = `blink ${blinkDur} infinite ease-in-out`;
        star.style.animationDelay = blinkDelay;

        // 将星星加入 DOM
        container.appendChild(star);

        // 在数组中保存状态（用于动画更新）
        stars.push({
            el: star,
            left,
            top,
            speed,
            sway,
            freq,
            phase
        });
    }
};

// 动画循环：更新每颗星的 top（下落）与横向摆动（transform）
let lastTime = null;
const loop = (time) => {
    if (lastTime === null) lastTime = time;
    const dt = (time - lastTime) / 1000; // 秒
    lastTime = time;

    const container = starsContainer.value;
    if (!container) return;

    const height = container.getBoundingClientRect().height;
    for (const s of stars) {
        s.top += s.speed * dt; // 下落
        // 出底部则从顶部循环出现，保持均匀分布
        if (s.top > height + 10) {
            s.top = -10;
        }
        // 横向摆动使用 transform（GPU 加速）
        const swayX = Math.sin(time / 1000 * s.freq * Math.PI * 2 + s.phase) * s.sway;
        s.el.style.top = `${s.top}px`;
        s.el.style.transform = `translateX(${swayX}px)`;
    }

    rafId = requestAnimationFrame(loop);
};

onMounted(() => {
    createStars();
    rafId = requestAnimationFrame(loop);
});

onBeforeUnmount(() => {
    if (rafId) cancelAnimationFrame(rafId);
    // 清理 DOM（可选）
    if (starsContainer.value) {
        starsContainer.value.innerHTML = '';
    }
    stars = [];
});
</script>

<style>
.background {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, #0a0522, #1a1042, #2d1b69);
    /* overflow: hidden; */
}

.stars-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

/* 星星样式：去掉之前的 drift 动画，由 JS 控制位置，保留闪烁 */
.star {
    position: absolute;
    background: white;
    border-radius: 50%;
    opacity: 0.8;
    will-change: transform, top, opacity;
}

/* 闪烁动画：透明度变化（每颗时长随机）*/
@keyframes blink {

    0%,
    100% {
        opacity: 0.2;
    }

    50% {
        opacity: 1;
    }
}
</style>