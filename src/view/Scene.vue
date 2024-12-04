<template>
  <div class="cameraPositons-item-name1" @click="zhanshiNeishi()"> 车内 </div>
  <div class="home" v-show="shijiao != '3'">
    <!-- <div class="canvas-container" ref="canvasDom"></div> -->
    <div class="heardNav">
      <div class="logo">

        <span class="iconfont icon-fangxiangpan" style="font-size: 3rem;filter: drop-shadow(0 2px 2px);"></span>
        <div class="nav"> 汽车展厅DEMO </div>
      </div>
      <div class="gongneng">
        <span class="iconfont icon-folder-open-fill"></span>
        <span title="保存方案" ></span>
        <DocumentAdd style="width:2em;height:2em;margin-top: 2rem;margin-right: 2em;cursor: pointer;" />
        <span class="iconfont" style="width:1rem;font-size: 1.5rem;margin-right: 1em">|</span>
        <UserFilled class="iconfont icon-user" style="width:1em;height:1em;margin-top: 2rem;margin-right: .2em" />
        <span class="iconfont" style="font-size: 1rem;width: auto ;">郝先生</span>

      </div>
    </div>
    <div class="cameraPositons">
      <div class="cameraPositons-item" v-for="(item, index) in cameraPositons" :key="index">
        <div class="cameraPositons-item-name" :class="activeCameraPos === index ? 'active' : ''"
          @click="setCameraPosition(item.valueL, index)">{{ item.name }}</div>
      </div>
    </div>
    <el-radio-group v-model="shijiao" class="home-switch">
      <el-radio-button value="1">车身</el-radio-button>
      <el-radio-button value="2">内饰</el-radio-button>
    </el-radio-group>
    <el-drawer v-model="showModelList" :show-close="true" @close="closeDrawer()">
      <template #header>
        <div
          style="display: flex;justify-content: center;align-items: center;font-size: 1.5rem;font-weight: 800;color: #000;">
          车型列表</div>
      </template>
      <div class="modelDanTi">
        <el-card style="max-width: 480px">
          <img src="./../assets/image.png" alt="" srcset="" class="model-img">
          <!-- <div class="model-text">
            <div class="model-name">模型名称：宝马</div>
            <div class="model-desc">模型描述:</div>
          </div> -->
          <template #footer>
            <div style="display: flex;justify-content: space-between;align-items: center;font-size: large;color: #000;">
              <div>车型：&nbsp;&nbsp;&nbsp;宝马</div><el-button style="width: 4rem;" type="primary">查看
                <Search style="width: 1.5em;height: 1.5em" />
              </el-button>
            </div>
          </template>
        </el-card>
        <div
          style="width: 100%;height: 3rem;display: flex;justify-content: center;align-items: center;margin-top: 4rem;">
          更多车型尽情期待...</div>
      </div>
    </el-drawer>
    <div class="home-content">
      <el-radio-group v-model="tabPosition" class="select-btn">
        <el-radio-button value="1">车身颜色</el-radio-button>
        <el-radio-button value="2">贴膜材质</el-radio-button>
      </el-radio-group>
      <div class="select">
        <div class="select-item" v-show="tabPosition == 1" v-for="(item, index) in colors" :key="index"
          @click="selectColor(index)">
          <div class="select-item-color" :class="activeColor === index ? 'active' : ''"
            :style="{ backgroundColor: item }">
          </div>
        </div>
        <div class="select-item" v-show="tabPosition == 2" v-for="(item, index) in materials" :key="index"
          @click="selectMaterial(index)">
          <img class="select-item-color" :class="activeMaterial === index ? 'active' : ''" :src="item.img" alt="">
        </div>
      </div>
    </div>
    <div class="home-rightC">
      <div class="changeModel" v-for="(item, index) in typeCatch" @click="changeType(index)"
        :class="xuanzhongType === index ? 'activeType' : ''">
        {{ item }}
      </div>
    </div>

  </div>
</template>

<script setup>
import * as THREE from "three";
import { onMounted, reactive, ref, watch } from "vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { ElRadioButton, ElRadioGroup, ElDrawer, ElMessage, ElButton } from 'element-plus'
import { View, UserFilled, DocumentAdd, Search } from '@element-plus/icons-vue'
import gsap from 'gsap'
const typeCatch = ref(['展示', '方案', '车型', '场地'])
const xuanzhongType = ref(0)
const cameraPositons = [{ name: '车身', valueL: { x: 2.699, y: 1.569, z: 0.326 } }, { name: '车头', valueL: { x: 0.118, y: 1.720, z: 2.97 } }, { name: '车轮', valueL: { x: 2.1729, y: 1.50, z: -1.42 } }, { name: '车尾', valueL: { x: 0.037, y: 2.0752, z: -3.59 } }, { name: '前脸', valueL: { x: 0, y: 2.5, z: 3.4 } }, { name: '后视镜', valueL: { x: 2.114, y: 2.124, z: -0.12 } }]
const tabPosition = ref('1')
const showModelList = ref(false)
const shijiao = ref('1')
let bmw, zhanting;
let controls;
const closeDrawer = () => {
  showModelList.value = false;
  xuanzhongType.value = 0

}
const changeType = (index) => {
  xuanzhongType.value = index
  switch (index) {
    case 1:
      ElMessage.info('暂未开发')
      xuanzhongType.value = 0
      break;
    case 2:
      showModelList.value = true
      break;
    case 3:
      ElMessage.info('暂未开发')
      xuanzhongType.value = 0
    default:
      break;
  }
}
watch(() => shijiao.value, () => {
  if (shijiao.value == '1') {
    resetControl(controls)
  } else if (shijiao.value == '2') {
    changeQuanNeishi(controls)
  } else { }
  console.log('shijiao', shijiao.value);
})
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
  if (shijiao.value != '1') return ElMessage.warning('请切换视角');
  const newPositions = new THREE.Vector3();
  const originalPosition = camera.position.clone();
  activeCameraPos.value = index;
  gsap.to(originalPosition, {
    x: position.x, y: position.y, z: position.z, onUpdate: () => {
      camera.position.set(originalPosition.x, originalPosition.y, originalPosition.z);
    }, duration: 1, onComplete: () => {
    }
  });
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
  c.maxPolarAngle = Math.PI / 3;  // 同样确保相机不会指向负方向d
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
    x: -0.052, y: 0.871, z: -0.327, duration: 1.9, onComplete: () => {

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
  bmw = gltf.scene;
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
loader.load("./model/zhanting.glb", (gltf) => {
  zhanting = gltf.scene;
  scene.add(zhanting);
});
const zhanshiNeishi = () => {
  if (shijiao.value == '3') {
    shijiao.value = '1'
    bmw.visible = true;
    zhanting.visible = true;
    scene.background = null;
    return;
  }
  shijiao.value = '3'
  bmw.visible = false;
  zhanting.visible = false;

  // 加载天空盒纹理
  const loaderCube = new THREE.CubeTextureLoader();
  const skyboxTexture = loaderCube.load([
    'CarPng/px.jpg', // 右
    'CarPng/nx.jpg', // 左
    'CarPng/py.jpg', // 上
    'CarPng/ny.jpg', // 下
    'CarPng/pz.jpg', // 前
    'CarPng/nz.jpg', // 后
  ]);

  // 设置场景背景为天空盒纹理
  scene.background = skyboxTexture;
}
</script>
<style scoped lang="less">
.heardNav {
  width: 100%;
  height: 8%;
  position: absolute;
  top: 0;
  background-color: rgba(236, 236, 241, 0.279);
  box-shadow: 0px 0px 3px 5px;
  z-index: 12;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .logo {
    height: 100%;
    // background-image: url("carLogo.png");
    background-repeat: no-repeat;
    z-index: 20;
    background-size: 100% 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;

    .nav {
      width: auto;
      height: 100%;
      font-size: 2rem;
      line-height: 5rem;
      font-weight: 900;
      margin-left: 1.5rem;

      text-shadow: -3px 0px 2px;
      font-style: italic;
      color: rgba(0, 0, 0, 0.637);
      //扩大字体间距
      text-decoration: underline;
      // 字体间距
      letter-spacing: 0.5rem;
      // 设置字体下划线样式
      text-decoration-style: solid;

      // 设置字体下划线颜色
      text-decoration-color: rgb(19, 18, 18);
      cursor: pointer;
    }

    .iconfont {
      font-size: 3rem;
      line-height: 3rem;
      color: rgba(24, 4, 197, 0.945);
      cursor: pointer;
    }
  }

  .gongneng {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    width: auto;
    height: 10vh;
    line-height: 10vh;
    margin-right: 2rem;

    .iconfont {
      cursor: pointer;
      height: 100%;
      width: 2.5rem;
      font-size: 2rem;

    }

  }
}
</style>
<style>
.el-drawer {
  width: 20% !important;
  background-color: #e7e7e7 !important;
}
</style>
<style scoped>
.home-rightC {
  position: fixed;
  top: 8%;
  right: 0;
  width: 4rem;
  height: calc(100vh - 8%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #00000047;
}

.changeModel {
  width: 100%;
  height: 4rem;
  cursor: pointer;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 600;
  background-color: #00000044;
  border-bottom: #000000a2 solid 1px;
}

.changeModel:hover {
  background-color: #af23238c;
  color: #fff;
}

.activeType {
  background-color: #af23238c;
  color: #fff;
}

.cameraPositons {
  width: 6rem;
  position: fixed;
  left: 1rem;
  top: 17%;
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

.cameraPositons-item-name1 {
  position: fixed;
  left: 1.6rem;
  top: 13%;
  height: 70%;
  width: 4rem;
  text-align: center;
  height: 4rem;
  line-height: 4rem;
  font-size: medium;
  color: #000000;
  border: #00ffea8c solid .2em;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  margin-bottom: 1.5rem;
}

.cameraPositons-item-name1:hover {
  background-color: #00aeff8c;
}

.cameraPositons-item-name {
  width: 3rem;
  text-align: center;
  height: 3rem;
  line-height: 3rem;
  font-size: medium;
  color: #fff;
  border: #ffffff solid .1em;
  border-radius: 50%;
  background-color: rgba(0, 255, 200, 0.699);
  cursor: pointer;
}

.cameraPositons-item-name:hover {
  background-color: #00aeff8c;
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
  border: .2em solid #0051ff;
  box-shadow: inset 0 0 1.5rem #0051ff;
}

.select {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-switch {
  position: fixed;
  bottom: 2%;
  left: 10.5%;
  height: 3rem;
  z-index: 3;
}

.home-switch-btn {
  width: 3rem;
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.856);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .modelDanTi{
  width: 90%;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
} */
.model-img {
  width: 100%;
  height: 8rem;
  margin-top: .5rem;
}
</style>