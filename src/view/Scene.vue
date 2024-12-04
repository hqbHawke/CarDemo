<template>
  <div class="cameraPositons-item-name1" v-show="shijiao == '1'" @click="zhanshiNeishi()"><span
      class="iconfont icon-a-ziyuan14" style="font-size: 1.3rem;"> </span></div>
  <div class="cameraPositons-item-name1" v-show="shijiao == '2'" @click="zhanshiNeishi()"><span
      class="iconfont icon-iconfontzhizuobiaozhun023150" style="font-size: 1.3rem;"> </span></div>
  <div class="home" v-show="shijiao != '2'">
    <!-- <div class="canvas-container" ref="canvasDom"></div> -->
    <!-- <div class="cameraPositons">
      <div class="cameraPositons-item" v-for="(item, index) in cameraPositons" :key="index">
        <div class="cameraPositons-item-name" :class="activeCameraPos === index ? 'active' : ''"
          @click="setCameraPosition(item.valueL, index)">{{ item.name }}</div>
      </div>
    </div> -->
    <!-- <el-radio-group v-model="shijiao" class="home-switch">
      <el-radio-button value="1">车身</el-radio-button>
      <el-radio-button value="2">内饰</el-radio-button>
    </el-radio-group> -->
    <!-- <div class="home-content">
      <el-radio-group v-model="tabPosition" class="select-btn">
        <el-radio-button value="1">车身颜色</el-radio-button>
        <el-radio-button value="2">贴膜材质</el-radio-button>
      </el-radio-group> -->
    <!-- <div class="select">
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
      </div> -->
    <!-- </div> -->
    <div id="home-rightC" :class="rigthbActive?'home-rightC2':'home-rightC'">
      <div class="zhanshi" style="width: 100%;height: 100%;" v-show="!rigthbActive">

        <div class="qichemodel" v-show="xuanzhongType === 0">
          <div class="modellist" style="width: 80%;">
            <img src="/public/CarPng/qiche.png" alt="" srcset=""
              style="width: 100%;height: 100%; background-color: transparent;">
          </div>
          <div class="modellist" style="width: 80%;">
            <img src="/public/CarPng/qiche.png" alt="" srcset=""
              style="width: 100%;height: 100%; background-color: transparent;">
          </div>
          <div class="modellist" style="width: 80%;">
            <img src="/public/CarPng/qiche.png" alt="" srcset=""
              style="width: 100%;height: 100%; background-color: transparent;">
          </div>
          <div class="modellist" style="width: 80%;">
            <img src="/public/CarPng/qiche.png" alt="" srcset=""
              style="width: 100%;height: 100%; background-color: transparent;">
          </div>
        </div>
        <div class="qichemodel" v-show="xuanzhongType === 5" style="gap: 2rem;">
          <div class="modellist" style="width: 75%;height: 6rem;">
            <img src="/public/cahngjing/image.png" alt="" srcset=""
              style="width: 100%;height: 100%; background-color: transparent;">
          </div>
          <div class="modellist" style="width: 75%;height: 6rem;">
            <img src="/public/cahngjing/image.png" alt="" srcset=""
              style="width: 100%;height: 100%; background-color: transparent;">
          </div>
          <div class="modellist" style="width: 75%;height: 6rem;">
            <img src="/public/cahngjing/image.png" alt="" srcset=""
              style="width: 100%;height: 100%; background-color: transparent;">
          </div>
          <div class="modellist" style="width: 75%;height: 6rem;">
            <img src="/public/cahngjing/image.png" alt="" srcset=""
              style="width: 100%;height: 100%; background-color: transparent;">
          </div>
        </div>
        <div class="qichemodel" v-show="xuanzhongType === 4">
          <div class="select-item" v-show="tabPosition == 1" v-for="(item, index) in colors" :key="index"
            @click="selectColor(index)">
            <div class="waiceng" style="
            width: 3.5rem;
            height: 3.5rem;
            /* border: 1px solid #ccc; */
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;" :class="activeColor === index ? 'active' : ''">
              <div class="select-item-color" :style="{ backgroundColor: item }"
                :class="activeColor === index ? 'active1' : ''">
              </div>
            </div>
          </div>
        </div>
        <div class="qichemodel" v-show="xuanzhongType === 2">
          <div class="modelchelunlist" v-for="(item, index) in cheluntu" @click="setCheLunMaterial(index)">
            <div class="waiceng" style="
            width: 3.5rem;
            height: 3.5rem;
            /* border: 1px solid #ccc; */
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;" :class="activechelun === index ? 'active' : ''">
              <img :src="item.img" alt="" srcset="" style="width: 100%;height: 100%; background-color: transparent;">
            </div>
          </div>
        </div>
        <div class="qichemodel" v-show="xuanzhongType === 1">
          <div class="modelchelunlist" v-for="(item, index) in materials" @click="selectMaterial(index)">
            <div class="waiceng" style="
            width: 3.5rem;
            height: 3.5rem;
            /* border: 1px solid #ccc; */
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;" :class="activeMaterial === index ? 'active' : ''">
              <img :src="item.img" alt="" srcset=""
                style="width: 100%;height: 100%; background-color: transparent;border-radius: 50%;"
                :class="activeMaterial === index ? 'active1' : ''">
            </div>
          </div>
          <!-- <div class="select-item" v-show="tabPosition == 2" v-for="(item, index) in materials" :key="index"
          @click="selectMaterial(index)">
          <img class="select-item-color" :class="activeMaterial === index ? 'active' : ''" :src="item.img" alt="">
        </div> -->
        </div>
        <div class="qichemodel" v-show="xuanzhongType === 3">
          <div class="modelchelunlist" v-for="(item, index) in tianqilist" @click="selecttianqi(index)">
            <div class="waiceng" style="
            width: 3.5rem;
            height: 3.5rem;
            /* border: 1px solid #ccc; */
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;" :class="activeTianqi === index ? 'active' : ''">
              <span class="iconfont" :class="item.class" style="font-size: 2.4rem;"
                :style="{ color: item.color }"></span>
            </div>
          </div>
          <!-- <div class="select-item" v-show="tabPosition == 2" v-for="(item, index) in materials" :key="index"
          @click="selectMaterial(index)">
          <img class="select-item-color" :class="activeMaterial === index ? 'active' : ''" :src="item.img" alt="">
        </div> -->
        </div>
      </div>
      <div class="home-rightc1">
        <div class="changeModel" style="position: absolute;top: 0;right: 0" v-show="rigthbActive" @click="rigthbActive=false"><ArrowRightBold style="width: 1.5em;height: 1.5em"/></div>
        <div class="changeModel" v-for="(item, index) in typeCatch" @click="changeType(index)"
          :class="xuanzhongType === index ? 'activeType' : ''">
          <span class="iconfont" :class="item" style="font-size: 1.3rem;"></span>
        </div>
        <div @click="xuangou()"
          style="position: fixed;bottom: 0;right: 0;height: 2rem;line-height: 2rem;width: 4rem;text-align: center;background-color: #434D5B;color: #D7D7D7;cursor: pointer;">
          选购</div>
      </div>

      <div class="home-rightb" v-show="rigthbActive">
        <div class="mainRightb" style="width: 100%;">

        </div>
        <div class="fotter"
          style="width: 80%;height: 3rem;display: flex;justify-content: space-between;align-items: center;border-top: #CCCCAB solid 1px;">
          <div class="fotter-left" style="width:30%;text-align: center;line-height: 2rem;">
            299,000
          </div>
          <el-button type="default" style="width: 5rem;" @click="ElMessage.info('暂未开发')">保存配置</el-button>
        </div>
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
import { View, UserFilled, DocumentAdd, Search,ArrowRightBold } from '@element-plus/icons-vue'
import gsap from 'gsap'
const rigthbActive = ref(false)
const xuangou = () =>{
  //   const x = document.getElementById('home-rightC').style.width
  // if(rigthbActive.value){
  //   x = '24rem'
  //   console.log(x);
  // }else{
  //   console.log(x);
  //   x = '17rem'}
  rigthbActive.value = !rigthbActive.value
  console.log(rigthbActive.value);
}
let colors = ["red", "blue", "green", "gray", "orange", "purple"];
const tianqilist = [{ class: 'icon-taiyang', color: '#F9C626' }, { class: 'icon-duoyun', color: '#7CDCFE' }, { class: 'icon-tianqiyutiandayu', color: '#fff' }]
const activechelun = ref(0)
const cheluntu = ref([{ img: '/public/CarPng/chelun.png', color: colors[0] }, { img: '/public/CarPng/chelun.png', color: colors[1] }, { img: '/public/CarPng/chelun.png', color: colors[2] }])
const setCheLunMaterial = (index) => {
  activechelun.value = index
  wheelsMaterial.color.set(colors[index]);
}
const typeCatch = ref(['icon-liebiao', 'icon-zhuangxiu', 'icon-chelun', 'icon-yun-', 'icon-ziyuan', 'icon-lunbo-04'])
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
const activeTianqi = ref(0)
const selecttianqi = (index) => {
    activeTianqi.value = index
  switch (index) {
    case 0:
      light.intensity = 200;
      ElMessage.success('大太阳')
      break;
    case 1:
      light.intensity = 50;
      ElMessage.success('阴天')
      break;
    case 2:
      // light.intensity = 30;
      ElMessage.info('暂未开发')
      activeTianqi.value = 0
      light.intensity = 200;
    default:
      break
  }
}
const changeType = (index) => {
  xuanzhongType.value = index
  // showModelList.value = true
  // ElMessage.info('暂未开发')
}
// watch(() => shijiao.value, () => {
//   if (shijiao.value == '1') {
//     resetControl(controls)
//   } else if (shijiao.value == '2') {
//     changeQuanNeishi(controls)
//   } else { }
//   console.log('shijiao', shijiao.value);
// })
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
// const setCameraPosition = (position, index) => {
//   if (shijiao.value != '1') return ElMessage.warning('请切换视角');
//   const newPositions = new THREE.Vector3();
//   const originalPosition = camera.position.clone();
//   activeCameraPos.value = index;
//   gsap.to(originalPosition, {
//     x: position.x, y: position.y, z: position.z, onUpdate: () => {
//       camera.position.set(originalPosition.x, originalPosition.y, originalPosition.z);
//     }, duration: 1, onComplete: () => {
//     }
//   });
// };
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



let selectColor = (index) => {
  bodyMaterial.color.set(colors[index]);
  frontMaterial.color.set(colors[index]);
  hoodMaterial.color.set(colors[index]);
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
scene.background = new THREE.Color("#9BC2E4");
scene.environment = new THREE.Color("#ccc");
render();
// 添加控制器
controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// 添加gltf汽车模型
const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("draco/");
loader.setDRACOLoader(dracoLoader);
loader.load("./model/bmw01.glb", (gltf) => {
  bmw = gltf.scene;
  bmw.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
    }
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
});
const zhanshiNeishi = () => {
  if (shijiao.value == '2') {
    shijiao.value = '1'
    bmw.visible = true;
    zhanting.visible = true;
    scene.background = new THREE.Color("#9BC2E4");
    return;
  }
  shijiao.value = '2'
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
  console.log(skyboxTexture);
  // 设置场景背景为天空盒纹理
  scene.background = skyboxTexture;
}
//增加光照
renderer.shadowMap.enabled = true;   // 开启阴影
renderer.shadowMap.type = THREE.PCFSoftShadowMap;  // 使用软阴影
// 设置光源 - 点光源
const light = new THREE.PointLight(0xffffff, 200, 100, 2);
light.position.set(2, 5, 2);  // 设置光源位置
light.castShadow = true;   // 开启阴影
light.shadow.mapSize.width = 2048;  // 提高阴影的分辨率
light.shadow.mapSize.height = 2048;
light.shadow.camera.near = 0.1;  // 阴影的近裁剪面
light.shadow.camera.far = 25;    // 阴影的远裁剪面
light.shadow.bias = -0.005;  // 阴影偏移，避免接缝现象
scene.add(light);

const chuangjianding = () => {
  // 创建材质并应用
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xD6DBDE,   // 颜色
    side: THREE.DoubleSide,  // 双面渲染
  });
  // 创建底面
  const bottomGeometry = new THREE.PlaneGeometry(10, 10);
  const bottomMesh = new THREE.Mesh(bottomGeometry, material);
  bottomMesh.rotation.x = -Math.PI / 2;  // 旋转 90 度，使其水平
  bottomMesh.position.y = 0;  // 放置在地面上
  bottomMesh.receiveShadow = true;  // 接收阴影

  // 创建前面
  const frontGeometry = new THREE.PlaneGeometry(10, 10);
  const frontMesh = new THREE.Mesh(frontGeometry, material);
  frontMesh.position.z = 5;  // 向前移动
  frontMesh.rotation.y = Math.PI;  // 旋转 180 度，使其面向相机

  // 创建后面
  const backGeometry = new THREE.PlaneGeometry(10, 10);
  const backMesh = new THREE.Mesh(backGeometry, material);
  backMesh.position.z = -5;  // 向后移动
  backMesh.rotation.y = Math.PI;  // 旋转 180 度

  // 创建左侧面
  const leftGeometry = new THREE.PlaneGeometry(10, 10);
  const leftMesh = new THREE.Mesh(leftGeometry, material);
  leftMesh.position.x = -5;  // 向左移动
  leftMesh.rotation.y = Math.PI / 2;  // 旋转 90 度

  // 创建右侧面
  const rightGeometry = new THREE.PlaneGeometry(10, 10);
  const rightMesh = new THREE.Mesh(rightGeometry, material);
  rightMesh.position.x = 5;  // 向右移动
  rightMesh.rotation.y = -Math.PI / 2;  // 旋转 -90 度

  zhanting = new THREE.Group();
  zhanting.add(bottomMesh, leftMesh, frontMesh, backMesh, rightMesh);

  scene.add(zhanting);

}
//创建展示厅
chuangjianding();
</script>
<style>
.el-drawer {
  width: 20% !important;
  background-color: #e7e7e7 !important;
}
</style>
<style scoped>
.home-rightC {
  position: fixed;
  top: 0;
  right: 0;
  width: 17rem;
  height: 100vh;
  background: #737373a8;
  backdrop-filter: blur(10px);
  /* box-shadow: 0 4px 6px rgba(148, 148, 148, 0.295); */
  /* 增加阴影效果 */
}
.home-rightC2{
  position: fixed;
  top: 0;
  right: 0;
  width: 24rem;
  height: 100vh;
  background: #737373a8;
  backdrop-filter: blur(10px);

}
.home-rightb {
  position: fixed;
  top: 0;
  right: 4rem;
  width: 20rem;
  height: 100vh;
  background: #737373a8;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mainRightb{
  height: calc(100% - 3rem);
}

.modellist {
  width: 100%;
  height: 8rem;
}

.qichemodel {
  position: absolute;
  top: 0;
  left: 0;
  width: 13rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home-rightc1 {
  position: fixed;
  right: 0;
  top: 0;
  width: 4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: #737373a8; */
  /* backdrop-filter: blur(10px); */
  /* 背景模糊效果 */
  border-left: #696969a1 solid 1px;
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
}

.changeModel:hover {
  background: linear-gradient(to right, rgba(169, 169, 169, 1), rgba(169, 169, 169, 0));
  color: #fff;
}

.activeType {
  background: linear-gradient(to right, rgba(169, 169, 169, 1), rgba(169, 169, 169, 0));
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
  right: 18rem;
  top: 4%;
  height: 70%;
  width: 3.5rem;
  text-align: center;
  height: 3.5rem;
  line-height: 3.5rem;
  font-size: medium;
  color: #000000;
  border-radius: 50%;
  background-color: #737373a8;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

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

.select-item {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.select-item-color {
  width: 3.5rem;
  height: 3.5rem;
  /* border: 1px solid #ccc; */
}

.modelchelunlist {
  width: 5rem;
  height: 5rem;
  /* border: 1px solid #ccc; */
  margin: .5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border-radius: 50%;

}

.active {
  /* width: 3rem;
  height: 3rem; */
  border: .17rem solid #ffffff !important;
  /* 最外层的白色边框，2px */
  /* box-shadow: 0 0 0 .2rem transparent;  3px 无色透明的边框 */
}

.active1 {
  width: 2.5rem !important;
  height: 2.5rem !important;
  border-radius: 50%;
}

.activeChelun {
  background-color: #ffffff6b;
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