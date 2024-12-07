<template>
  <div id="app">
    <div ref="threejsContainer" class="threejs-container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
const threejsContainer = ref(null);  // Vue 3 的 ref，绑定到 DOM 元素
let scene, camera, renderer, carModel, controls, clock;

// 初始化 Three.js
const initThreeJS = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,  // 视角
    window.innerWidth / window.innerHeight,  // 宽高比 
    0.1,  // 最近的渲染距离
    1000  // 最远的渲染距离
  );
  camera.position.set(0, 5, 15); // 相机位置

  // 创建渲染器并启用抗锯齿
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;  // 启用阴影
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;  // 使用软阴影
  threejsContainer.value.appendChild(renderer.domElement);

  // 创建 OrbitControls 使得用户可以拖动视角
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.screenSpacePanning = false;

  // 添加光源
  const ambientLight = new THREE.AmbientLight(0x404040, 1);  // 环境光
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 4);  // 定向光
  directionalLight.position.set(5, 10, 7).normalize();
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  // 背景反射环境贴图
  const reflectionTexture = new THREE.CubeTextureLoader().load([
    './CarPng/px.png', './CarPng/nx.png',
    './CarPng/py.png', './CarPng/ny.png',
    './CarPng/pz.png', './CarPng/nz.png',
  ]);
  scene.background = reflectionTexture;

  // 监听窗口大小变化
  window.addEventListener('resize', onWindowResize);
};

// 加载汽车模型
const loadModel = () => {
  const loader = new FBXLoader();
  loader.load(
    './model/Su7.fbx',  // 模型路径
    (gltf) => {
      carModel = gltf;
      carModel.position.set(0, 0, 0);  // 设置模型位置
      carModel.scale.set(0.02, 0.02, 0.02);  // 设置模型缩放
      carModel.castShadow = true;
      carModel.receiveShadow = true;

      // 设置汽车的材质
      carModel.traverse((child) => {
        if (child.isMesh) {
          child.material.emissive = 0xffffff;  // 设置自发光颜色
          child.material.emissiveIntensity = 0.01;  // 设置自发光强度

          // child.material = new THREE.MeshStandardMaterial({
          //   color: 0x333333,
          //   metalness: 0.8,
          //   roughness: 0.2,
          //   envMap: scene.background,  // 使用背景反射
          //   //自发光
          //   emissive: 0xffffff,
          //   emissiveIntensity: 0.01
          // });
        }
      });

      scene.add(carModel);
    },
    undefined,
    (error) => {
      console.error('Error loading model:', error);
    }
  );
};

// 渲染循环
const animate = () => {
  requestAnimationFrame(animate);
  controls.update();  // 更新控制器
  renderer.render(scene, camera);  // 渲染场景
};

// 窗口自适应
const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

// Vue 生命周期钩子
onMounted(() => {
  initThreeJS();  // 初始化 Three.js
  loadModel();  // 加载模型
  clock = new THREE.Clock();
  animate();  // 启动动画循环
});

onBeforeUnmount(() => {
  // 清理资源
  if (renderer) renderer.dispose();
  if (controls) controls.dispose();
  window.removeEventListener('resize', onWindowResize);
});

</script>

<style>
.threejs-container {
  width: 100%;
  height: 100vh;
  position: relative;
}
</style>
