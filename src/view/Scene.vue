<template>
  <div class="home">
    <!-- <div class="canvas-container" ref="canvasDom"></div> -->
    <div class="cameraPositons">
      <div class="cameraPositons-item" v-for="(item, index) in cameraPositons" :key="index">
        <div class="cameraPositons-item-name" :class="activeCameraPos === index ? 'active' : ''"
          @click="setCameraPosition(item.valueL, index)">{{ item.name }}</div>
      </div>
    </div>
    <div class="home-switch">
        <div class="home-switch-btn" @click="changeQuanNeishi(controls)" title="切换视角" >
          <View style="width: 2em; height: 2em;color:white" title="切换视角" />
        </div>
    </div>
    <el-drawer v-model="drawer" title="I am the title" :with-header="false">
      <span>Hi there!</span>
    </el-drawer>
    <div class="home-content">
      <el-radio-group v-model="tabPosition" class="select-btn">
        <el-radio-button value="1">车身颜色</el-radio-button>
        <el-radio-button value="2">贴膜材质</el-radio-button>
      </el-radio-group>
      <div class="select">
        <div class="select-item" v-show="tabPosition == 1" v-for="(item, index) in colors" :key="index"
          @click="selectColor(index)">
          <div class="select-item-color" :class="activeColor === index ? 'active' : ''" :style="{ backgroundColor: item }">
          </div>
        </div>
        <div class="select-item" v-show="tabPosition == 2" v-for="(item, index) in materials" :key="index"
          @click="selectMaterial(index)">
          <img class="select-item-color" :class="activeMaterial === index ? 'active' : ''" :src="item.img" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as THREE from "three";
import { onMounted, reactive, ref } from "vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { ElRadioButton, ElRadioGroup, ElDrawer } from 'element-plus'
import { View } from '@element-plus/icons-vue'
import gsap from 'gsap'
const cameraPositons = [{ name: '车身', valueL: { x: 2.93, y: 1.792, z: 1.586 } }, { name: '车头', valueL: { x: 0.132, y: 0.855, z: 3.33 } }, { name: '车轮', valueL: { x: 2.42, y: 0, z: -1.586 } }, { name: '车尾', valueL: { x: 0.034, y: 1.21, z: -3.97 } }, { name: '前脸', valueL: { x: 0, y: 2.5, z: 3.4 } }, { name: '后视镜', valueL: { x: 1.215, y: 1.221, z: -0.07 } }, { name: '后备箱', valueL: { x: 0.005, y: 1.65, z: -2.84 } }]
const tabPosition = ref('1')
const drawer = ref(false)
let controls;
// let canvasDom = ref(null);
// 创建场景
const scene = new THREE.Scene();
// 创建相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
);
const activeColor = ref(0);
const activeCameraPos = ref(0);
const activeMaterial = ref(0);
camera.position.set(2.93, 1.792, 1.586);
const setCameraPosition = (position, index) => {
  const newPositions = new THREE.Vector3();
  const originalPosition = camera.position.clone();
  gsap.to(originalPosition, {
    x: position.x, y: position.y, z: position.z, onUpdate: () => {
      camera.position.set(originalPosition.x, originalPosition.y, originalPosition.z);
    }, duration: .5
  });
  activeCameraPos.value = index
};
// 创建渲染器
const renderer = new THREE.WebGLRenderer({
  // 抗锯齿
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
const render = () => {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  controls && controls.update();
};

let wheels = [];
let carBody, frontCar, hoodCar, glassCar;
// 创建材质
const bodyMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xff0000,
  metalness: 1,
  roughness: 0.5,
  clearcoat: 1,
  clearcoatRoughness: 0,
});

const frontMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xff0000,
  metalness: 1,
  roughness: 0.5,
  clearcoat: 1,
  clearcoatRoughness: 0,
});
const hoodMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xff0000,
  metalness: 1,
  roughness: 0.5,
  clearcoat: 1,
  clearcoatRoughness: 0,
});
const wheelsMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xff0000,
  metalness: 1,
  roughness: 0.1,
});
const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0,
  roughness: 0,
  transmission: 1,
  transparent: true,
});
const resetControl = (c) => {
  c.minPolarAngle = -Math.PI / 2;  // 限制相机只能够在水平面上旋转，不允许俯视
  c.maxPolarAngle = Math.PI / 2;  // 同样确保相机不会指向负方向d
  c.minDistance = 3;  // 限制相机最小距离
  c.maxDistance = 6;  // 限制相机最大距离
  c.enableDamping = true;  // 开启相机惯性
  c.dampingFactor = 0.1;  // 设置相机惯性
  c.enablePan = false;  // 禁止平移
}
const changeQuanNeishi = (c) => {
  c.minPolarAngle = 0;
  c.maxPolarAngle = Math.PI;
  c.minDistance = 0;
  c.maxDistance = Infinity;
  // 设置相机位置
  gsap.to(camera.position, {
    x: -0.052, y: 0.871, z: -0.327, duration: .9, onComplete: () => {

      // 计算目标位置：设置目标为相机前方的一点
      const direction = new THREE.Vector3(0, 0, -1); // 假设相机朝向的方向是负Z轴
      const target = camera.position.clone().add(direction.multiplyScalar(0.0001)); // 将目标设置为相机前方0.5单位

      // 设置控制器目标
      c.target.copy(target);

      // 更新控制器和相机投影矩阵
      c.update();
      camera.updateProjectionMatrix();
    }
  });

};

let colors = ["red", "blue", "green", "gray", "orange", "purple"];

let selectColor = (index) => {
  bodyMaterial.color.set(colors[index]);
  frontMaterial.color.set(colors[index]);
  hoodMaterial.color.set(colors[index]);
  wheelsMaterial.color.set(colors[index]);
  // glassMaterial.color.set(colors[index]);
  activeColor.value = index;
};

let materials = [
  { name: "冰晶", value: 0, img: "materials/bingjing.png" },
  { name: "磨砂", value: 1, img: "materials/mosha.png" },
];
let selectMaterial = (index) => {
  bodyMaterial.clearcoatRoughness = materials[index].value;
  frontMaterial.clearcoatRoughness = materials[index].value;
  hoodMaterial.clearcoatRoughness = materials[index].value;
  activeMaterial.value = index;
};
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
// 把渲染器插入到dom中
document.body.appendChild(renderer.domElement);
// 初始化渲染器，渲染背景
renderer.setClearColor("#000");
scene.background = new THREE.Color("#ccc");
scene.environment = new THREE.Color("#ccc");
render();

// 添加网格地面
const gridHelper = new THREE.GridHelper(10, 10);
gridHelper.material.opacity = 0.2;
gridHelper.material.transparent = true;
scene.add(gridHelper);

// 添加控制器
controls = new OrbitControls(camera, renderer.domElement);
controls.update();
resetControl(controls);
controls.addEventListener("change", () => {
  // console.log(camera.position);
});
// 添加gltf汽车模型
const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("draco/");
loader.setDRACOLoader(dracoLoader);
loader.load("./model/bmw01.glb", (gltf) => {
  const bmw = gltf.scene;
  bmw.traverse((child) => {
    // if (child.isMesh) {
    //   console.log(child.name);
    // }
    // 判断是否是轮毂
    if (child.isMesh && child.name.includes("轮毂")) {
      child.material = wheelsMaterial;
      wheels.push(child);
    }
    // 判断是否是车身
    if (child.isMesh && child.name.includes("Mesh002")) {
      carBody = child;
      carBody.material = bodyMaterial;
    }
    // 判断是否是前脸
    if (child.isMesh && child.name.includes("前脸")) {
      child.material = frontMaterial;
      frontCar = child;
    }
    // 判断是否是引擎盖
    if (child.isMesh && child.name.includes("引擎盖_1")) {
      child.material = hoodMaterial;
      hoodCar = child;
    }
    // 判断是否是挡风玻璃
    if (child.isMesh && child.name.includes("挡风玻璃")) {
      child.material = glassMaterial;
      glassCar = child;
    }
  });
  scene.add(bmw);

  // 添加灯光
  const light1 = new THREE.DirectionalLight(0xffffff, 1);
  light1.position.set(0, 0, 10);
  scene.add(light1);
  const light2 = new THREE.DirectionalLight(0xffffff, 1);
  light2.position.set(0, 0, -10);
  scene.add(light2);
  const light3 = new THREE.DirectionalLight(0xffffff, 1);
  light3.position.set(10, 0, 0);
  scene.add(light3);
  const light4 = new THREE.DirectionalLight(0xffffff, 1);
  light4.position.set(-10, 0, 0);
  scene.add(light4);
  const light5 = new THREE.DirectionalLight(0xffffff, 1);
  light5.position.set(0, 10, 0);
  scene.add(light5);
  const light6 = new THREE.DirectionalLight(0xffffff, 0.3);
  light6.position.set(5, 10, 0);
  scene.add(light6);
  const light7 = new THREE.DirectionalLight(0xffffff, 0.3);
  light7.position.set(0, 10, 5);
  scene.add(light7);
  const light8 = new THREE.DirectionalLight(0xffffff, 0.3);
  light8.position.set(0, 10, -5);
  scene.add(light8);
  const light9 = new THREE.DirectionalLight(0xffffff, 0.3);
  light9.position.set(-5, 10, 0);
  scene.add(light9);
});
</script>

<style>
.cameraPositons {
  width: 6rem;
  position: fixed;
  left: 1rem;
  top: 14%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem .5rem;
}

.cameraPositons-item {
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem .5rem;
}

.cameraPositons-item-name {
  width: 3rem;
  text-align: center;
  height: 3rem;
  line-height: 3rem;
  font-size: medium;
  color: #fff;
  border: #ffffff solid .1em;
  border-radius: 2rem;
  background-color: rgba(0, 255, 200, 0.699);
  cursor: pointer;
}

.cameraTitle {
  width: 100%;
  text-align: center;
  height: 3rem;
  font-size: large;
  font-weight: 900;
  color: #000;
}

* {
  margin: 0;
  padding: 0;
}

.home-content {
  position: fixed;
  bottom: 4vh;
  width: 100%;
  text-align: center;
}

.select-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.select-item-color {
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid #ccc;
  margin: 1.5rem 1rem;
  display: inline-block;
  cursor: pointer;
  border-radius: 1.5rem;
}

.active {
  border: .2em solid #ffffff;
}

.select {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-switch {
  position: fixed;
  top: 10%;
  left: 3%;
  width: 3rem;
  height: 2rem;
  display: flex;
}
.home-switch-btn{
  width:2rem;
  height:2rem;
  border-radius: 2rem;
}
</style>