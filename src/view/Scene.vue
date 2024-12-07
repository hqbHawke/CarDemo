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
    <div id="home-rightC" :class="rigthbActive ? 'home-rightC2' : 'home-rightC'">
      <div class="zhanshi" style="width: 100%;height: 100%;" v-show="!rigthbActive">

        <div class="qichemodel" v-show="xuanzhongType === 0">
          <div class="modellist" style="width: 80%;" @click="ElMessage.info('暂时只当前模型')">
            <img src="/public/textures/chemo/image40.png" alt="" srcset=""
              style="width: 100%;height: 100%; background-color: transparent;">
          </div>
          <div class="modellist" style="width: 80%;" @click="ElMessage.info('暂时只当前模型')">
            <img src="/public/textures/chemo/image41.png" alt="" srcset=""
              style="width: 100%;height: 100%; background-color: transparent;">
          </div>
          <div class="modellist" style="width: 80%;" @click="ElMessage.info('暂时只当前模型')">
            <img src="/public/textures/chemo/image42.png" alt="" srcset=""
              style="width: 100%;height: 100%; background-color: transparent;">
          </div>
          <div class="modellist" style="width: 80%;" @click="ElMessage.info('暂时只当前模型')">
            <img src="/public/textures/chemo/image43.png" alt="" srcset=""
              style="width: 100%;height: 100%; background-color: transparent;">
          </div>
        </div>
        <div class="qichemodel" v-show="xuanzhongType === 5" style="gap: 2rem;">
          <div class="modellist" style="width: 75%;height: 6rem;" @click="ElMessage.info('暂不开发')">
            <img src="/public/cahngjing/image.png" alt="" srcset=""
              style="width: 100%;height: 100%; background-color: transparent;">
          </div>
          <div class="modellist" style="width: 75%;height: 6rem;" @click="ElMessage.info('暂不开发')">
            <img src="/public/cahngjing/image.png" alt="" srcset=""
              style="width: 100%;height: 100%; background-color: transparent;">
          </div>
          <div class="modellist" style="width: 75%;height: 6rem;" @click="ElMessage.info('暂不开发')">
            <img src="/public/cahngjing/image.png" alt="" srcset=""
              style="width: 100%;height: 100%; background-color: transparent;">
          </div>
          <div class="modellist" style="width: 75%;height: 6rem;" @click="ElMessage.info('暂不开发')">
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
          <div class="modelchelunlist" v-for="(item, index) in cheluntu1" @click="setCheLunMaterial(index)">
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
        <div class="changeModel" style="position: absolute;top: 0;right: 0" v-show="rigthbActive"
          @click="rigthbActive = false">
          <ArrowRightBold style="width: 1.5em;height: 1.5em" />
        </div>
        <div class="changeModel" v-for="(item, index) in typeCatch" @click="changeType(index)"
          :class="xuanzhongType === index ? 'activeType' : ''">
          <span class="iconfont" :class="item" style="font-size: 1.3rem;"></span>
        </div>
        <div @click="xuangou()"
          style="position: fixed;bottom: 0;right: 0;height: 2rem;line-height: 2rem;width: 4rem;text-align: center;background-color: #434D5B;color: #D7D7D7;cursor: pointer;">
          选购</div>
      </div>

      <div class="home-rightb" v-show="rigthbActive">
        <div class="mainRightb" v-show="rightaActive"></div>
        <div class="mainRightb" v-show="!rightaActive">
          <div class="colorE">
            <div class="right_title">选择颜色</div>
            <div class="right_h5">外饰</div>
            <div class="right_1">极夜黑</div>
            <div class="right_h5">价格已包含</div>
            <div class="colorList">
              <div class="modelchelunlist1" v-for="(item, index) in colors2" :key="index" @click="selectColor(index)">
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
          </div>
        </div>
        <div class="fotter" v-show="!rightaActive"
          style="width: 80%;height: 3rem;display: flex;justify-content: space-between;align-items: center;border-top: #CCCCAB solid 1px;">
          <div class="fotter-left" style="width:30%;text-align: center;line-height: 2rem;">
            299,000
          </div>
          <el-button type="default" style="width: 5rem;" @click="rightaActive = true">保存配置</el-button>
        </div>
        <div class="fotter" v-show="rightaActive"
          style="width: 80%;height: 3rem;display: flex;justify-content: space-around;align-items: center;border-top: #CCCCAB solid 1px;">
          <el-button type="info" style="width: 5rem;" @click="rightaActive = false">放弃配置</el-button>
          <el-button type="default" style="width: 5rem;"
            @click="rightaActive = false; rigthbActive = flase">去付款</el-button>
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
import { View, UserFilled, DocumentAdd, Search, ArrowRightBold } from '@element-plus/icons-vue'
import gsap from 'gsap'
const rigthbActive = ref(false)
const rightaActive = ref(false)
const xuangou = () => {
  //   const x = document.getElementById('home-rightC').style.width
  // if(rigthbActive.value){
  //   x = '24rem'
  //   console.log(x);
  // }else{
  //   console.log(x);
  //   x = '17rem'}
  rigthbActive.value = !rigthbActive.value
}
const tex1 = new THREE.TextureLoader().load('./textures/interior1_0.jpeg');
const tex2 = new THREE.TextureLoader().load('./textures/interior2_1.jpeg');
const tex3 = new THREE.TextureLoader().load('./textures/interior3_3.jpeg');
const tex4 = new THREE.TextureLoader().load('./textures/interior4_2.jpeg');
const wheel1 = new THREE.TextureLoader().load("./textures/whell1.png");
const wheel2 = new THREE.TextureLoader().load("./textures/whell2.png");
const wheel3 = new THREE.TextureLoader().load("./textures/whell3.png");

let colors2 = ["red", "blue", "green"]
let colors = ["red", "blue", "green", "gray", "orange", "purple"];
let wheel4 = new THREE.TextureLoader().load("./textures/whell4.png");
const tianqilist = [{ class: 'icon-taiyang', color: '#F9C626' }, { class: 'icon-duoyun', color: '#7CDCFE' }, { class: 'icon-tianqiyutiandayu', color: '#fff' }]
const activechelun = ref(0)

const typeCatch = ref(['icon-liebiao', 'icon-zhuangxiu', 'icon-chelun', 'icon-yun-', 'icon-ziyuan', 'icon-lunbo-04'])
const xuanzhongType = ref(0)
const cameraPositons = [{ name: '车身', valueL: { x: 2.699, y: 1.569, z: 0.326 } }, { name: '车头', valueL: { x: 0.118, y: 1.720, z: 2.97 } }, { name: '车轮', valueL: { x: 2.1729, y: 1.50, z: -1.42 } }, { name: '车尾', valueL: { x: 0.037, y: 2.0752, z: -3.59 } }, { name: '前脸', valueL: { x: 0, y: 2.5, z: 3.4 } }, { name: '后视镜', valueL: { x: 2.114, y: 2.124, z: -0.12 } }]
const tabPosition = ref('1')
const showModelList = ref(false)
const shijiao = ref('1')
let bmw, zhanting;
let controls;
let css2dRenderer;
let circle, circle1, FLD;
const closeDrawer = () => {
  showModelList.value = false;
  xuanzhongType.value = 0
}
const activeTianqi = ref(0)
const selecttianqi = (index) => {
  activeTianqi.value = index
  switch (index) {
    case 0:
      guangqiang.value = 1
      ElMessage.success('大太阳')
      break;
    case 1:
      guangqiang.value = 0.4

      ElMessage.success('阴天')
      break;
    case 2:
      // light.intensity = 30;
      ElMessage.info('暂未开发')
      activeTianqi.value = 0
      guangqiang.value = 1
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
  0.001,
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
  // css2dRenderer.render(scene, camera)
};


const adddiv = () => {
  const geometry = new THREE.CircleGeometry(.08, 32);
  const texture = new THREE.TextureLoader().load('materials/image.png');
  const material = new THREE.MeshPhysicalMaterial({ map: texture, emissive: 0xffeeee });
  circle = new THREE.Mesh(geometry, material);
  circle.name = 'circle';
  circle.position.set(0, 1.4, 0);
  circle.rotation.y = Math.PI / 2;
  scene.add(circle);
  const geometry2 = new THREE.CircleGeometry(.05, 32);
  const texture13 = new THREE.TextureLoader().load('materials/doorhand.png');
  const material2 = new THREE.MeshPhysicalMaterial({ map: texture13, emissive: 0xffeeee });
  circle1 = new THREE.Mesh(geometry2, material2);
  circle1.name = 'circle1';
  circle1.position.set(0, 0.73, -0.9);
  circle1.rotation.y = Math.PI - 20;
  scene.add(circle1);
}
const zhuanhuan = (e) => {
  const glbX = (e.clientX / window.innerWidth) * 2 - 1;
  const glbY = -(e.clientY / window.innerHeight) * 2 + 1;
  return { x: glbX, y: glbY };
}
window.addEventListener('mousemove', (e) => {
  //坐标转换
  const glb1 = zhuanhuan(e);
  //识别点击到的物体
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(glb1, camera);
  const intersects = raycaster.intersectObjects([circle, circle1]);
  if (intersects.length > 0) {
    intersects[0].object.material.color = new THREE.Color(0xfffff1);
    intersects[0].object.scale.set(1.3, 1.3, 1.3);
    //改变指针
    document.body.style.cursor = 'pointer';
  } else {
    circle.material.color = new THREE.Color(0x909292);
    circle.scale.set(1, 1, 1);
    circle1.material.color = new THREE.Color(0x909292);
    circle1.scale.set(1, 1, 1);
    document.body.style.cursor = 'default';
  }
})
window.addEventListener('click', (e) => {
  //坐标转换  
  const glb1 = zhuanhuan(e);
  //识别点击到的物体
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(glb1, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  if (intersects[0]) {
    if (intersects[0].object.name == 'circle') {
      zhanshiNeishi();
      circle.material.color = new THREE.Color(0x909292);
      circle.scale.set(1, 1, 1)
    } if (intersects[0].object.name == 'circle1') {
      an1()
      circle.material.color = new THREE.Color(0x909292);
      circle.scale.set(1, 1, 1)
    }
  }
}
)
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
  // gsap.to(camera.position, {
  //   x: -0.052, y: 0.871, z: -0.327, duration: 1.9, onComplete: () => {

  //     // 计算目标位置：设置目标为相机前方的一点
  //     const direction = new THREE.Vector3(0, 0, -1); // 假设相机朝向的方向是负Z轴
  //     const target = camera.position.clone().add(direction.multiplyScalar(0.0001)); // 将目标设置为相机前方0.5单位

  //     // 设置控制器目标
  //     c.target.copy(target);

  //     // 更新控制器和相机投影矩阵
  //     c.update();
  //     camera.updateProjectionMatrix();
  //   }
  // });

};


let wheels = [];
let carBody, frontCar, hoodCar, glassCar, carWheel;
// 创建材质
const bodyMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xff0000,
  map: null
});


let selectColor = (index) => {
  bodyMaterial.color.set(colors[index]);
  activeColor.value = index;
};
const texturebingjing = new THREE.TextureLoader().load("./materials/bingjing.jpg");
const texturemosha = new THREE.TextureLoader().load("./materials/cheyi/Frame1.png");
const texturexuancai = new THREE.TextureLoader().load("./materials/cheyi/Frame2.png");
const texturexuan = new THREE.TextureLoader().load("./materials/cheyi/Frame3.png");
let materials = [
  { name: "冰晶", value: 0, img: "materials/bingjing.png", map: null },
  { name: "磨砂", value: 1, img: "materials/cheyi/Frame1.png", map: texturemosha },
  { name: "选材", value: 1, img: "materials/cheyi/Frame2.png", map: texturexuancai },
  { name: "选材", value: 1, img: "materials/cheyi/Frame3.png", map: texturexuan },
];
let selectMaterial = (index) => {
  carBody.material.map = materials[index].map;
  carBody.material.needsUpdate = true;  // 强制更新材质
  activeMaterial.value = index;
};

const wh11 = ref()
const cheluntu1 = [{ img: 'CarPng/chelun.png', color: 'colors[0]', map: wheel4 },{ img: 'CarPng/chelun.png', color: colors[1], map: wheel2 }, { img: 'CarPng/chelun.png', color: colors[0], map: wheel1 }, { img: 'CarPng/chelun.png', color: colors[2], map: wheel3 }]
const setCheLunMaterial = (index) => {
  if(index == 0){
    carWheel.map = wh11.value.map;
  }else{
    carWheel.map = cheluntu1[index].map;
  }
  carWheel.needsUpdate = true;
  activechelun.value = index
}
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
// 把渲染器插入到dom中
document.body.appendChild(renderer.domElement);
// 初始化渲染器，渲染背景
renderer.setClearColor("#000");
scene.background = new THREE.Color("#E0F0FF");
scene.environment = new THREE.Color("#ccc");
adddiv();
render();
// 添加控制器
controls = new OrbitControls(camera, renderer.domElement);
controls.update();
// resetControl(controls)
// 添加gltf汽车模型
const loader = new GLTFLoader();
const draco = new DRACOLoader();
draco.setDecoderPath("./draco/");
loader.setDRACOLoader(draco);
let chemen2, boundingBox;
loader.load("./model/su7.glb", (gltf) => {
  bmw = gltf.scene;
  bmw.scale.set(0.9, 0.9, 0.9);  // 设置模型缩放
  bmw.background = new THREE.Color("#E0F0FF");
  bmw.traverse((child) => {

    if (child.isMesh && child.name.includes("Interior")) {
      child.material.map = tex4;
    }
    if (child.isMesh && child.name.includes("seat_belts")) {
      child.material.map = tex2;
    }
    if (child.isGroup && child.name.includes("FLD")) {

      // 创建一个 Box3 对象来计算边界框
      boundingBox = new THREE.Box3();

      // 遍历组内的所有子物体，计算整个组的边界框
      child.traverse(childMesh => {
        if (childMesh.isMesh) {
          childMesh.geometry.computeBoundingBox();  // 计算每个物体的边界框
          boundingBox.expandByObject(childMesh);    // 扩展边界框，包含当前物体
        }
      });
      chemen2 = child

    }
    if (child.isMesh && child.name.includes("CentralControl")) {
      child.material.map = tex1;
    }
    if (child.isMesh && child.name.includes("BWR")) {
      child.material.map = wheel1;
    }
    if (child.isMesh && child.name.includes("Body")) {
      carBody = child;  // 找到车身
      carBody.material.color = bodyMaterial.color;  // 使用指定的颜色
      carBody.material.map = bodyMaterial.map;  // 使用 bodyMaterial 的贴图
      carBody.material.needsUpdate = true;  // 确保更新材质
    }
    if (child.isMesh && child.name.includes("Wheel")) {
      wh11.value = child.material.clone()
      carWheel = new THREE.MeshPhysicalMaterial({
        map : wh11.value.map,
        //粗糙贴图
        roughnessmap:  wh11.value.roughnessmap,
        //金属光泽贴图
        metalnessmap: wh11.value.metalnessmap,
        //环境贴图
        transparent : false,
        needsUpdate: true
      });  // 找到车身
      carWheel.needsUpdate = true;  // 确保更新材质
      child.material = carWheel;
      child.material.needsUpdate = true;  // 确保更新材质
    }
  });
  scene.add(bmw);
});

//donghua
let marks = false
const an1 = () => {
  if (marks) return;
  marks = true
  // 获取当前组的边界框的中心点
  const center = new THREE.Vector3();
  boundingBox.getCenter(center);
  const offset = new THREE.Vector3(-33, -62, 0);  // 

  const tl = gsap.timeline({
  onComplete: () => {
    marks = false
  }
});

  // 同时执行位置和旋转的动画
  tl.to(chemen2.position, {
    x: chemen2.position.x + offset.x,  // x轴位置动画
    y: chemen2.position.y + offset.y,  // y轴位置动画
    duration: .5,                     // 动画持续2秒
    ease: "power2.inout"               // 缓动函数
  }, 0)
  tl.to(chemen2.rotation, {
    z: chemen2.rotation.z + Math.PI / 6,                     // 沿Z轴旋转45度
    duration: .5,                     // 动画持续2秒
    ease: "power2.inout"               // 缓动函数
  }, 0.005);
  tl.to(chemen2.position, {
    x: 0,  // x轴位置动画
    y: 0,  // y轴位置动画
    duration: .5,                     // 动画持续2秒
    ease: "power2.inout"               // 缓动函数
  }, 1)
  tl.to(chemen2.rotation, {
    z: 0,                     // 沿Z轴旋转45度
    duration: .5,                     // 动画持续2秒
    ease: "power2.inout"               // 缓动函数
  }, "<");
  // chemen2.position.set(chemen2.position.x + offset.x, chemen2.position.y + offset.y, chemen2.position.z);
  // chemen2.rotation.z = chemen2.rotation.z + Math.PI / 6;
}
const an2 = () => {
  const tl = gsap.timeline();
  tl.to(chemen2.position, {
    x: chemen2.position.x - 30,  // x轴位置动画
    y: chemen2.position.y + 65,  // y轴位置动画
    duration: .5,                     // 动画持续2秒
    ease: "power2.inout"               // 缓动函数
  }, "<");
}
const zhanshiNeishi = () => {
  if (shijiao.value == '2') {
    shijiao.value = '1'
    bmw.visible = true;
    zhanting.visible = true;
    circle1.visible = true;
    circle.visible = true;
    scene.background = new THREE.Color("#9BC2E4");
    resetControl(controls)
    return;
  }
  changeQuanNeishi(controls)
  shijiao.value = '2'
  bmw.visible = false;
  zhanting.visible = false;
  circle.visible = false;
  circle1.visible = false;
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

renderer.toneMapping = true;  // 开启ToneMapping
renderer.toneMappingExposure = 0.7;  // 设置曝光度

const guangqiang = ref(1)
// 设置光源 - 点光源
const light = new THREE.PointLight(0xffddee, 200, 2, 2);
light.position.set(0, 50, 0);
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffeeee, guangqiang.value);
directionalLight.position.set(-0.05, 4, 7.5)
scene.add(directionalLight);
const directionalLight1 = new THREE.DirectionalLight(0xffeeee, guangqiang.value);
directionalLight1.position.set(4, 4, -9)
scene.add(directionalLight1);
const directionalLight2 = new THREE.DirectionalLight(0xffeeee, guangqiang.value);
directionalLight2.position.set(-9.5, 4, 0.9)
scene.add(directionalLight2);
const directionalLight3 = new THREE.DirectionalLight(0xffeeee, guangqiang.value);//前脸
directionalLight3.position.set(10, 4, -0.23)
scene.add(directionalLight3);
watch(() => guangqiang.value, (newValue) => {
  directionalLight.intensity = newValue;
  directionalLight1.intensity = newValue;
  directionalLight2.intensity = newValue;
  directionalLight3.intensity = newValue;
});
const chuangjianding = () => {
  // 创建材质并应用
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xDdDdDE,            // 颜色，类似瓷砖的浅色
    side: THREE.DoubleSide,     // 双面渲染
    metalness: 0.1,             // 稍微有点金属感，瓷砖的光泽度不高
    roughness: 0.05,            // 瓷砖表面光滑，所以粗糙度非常低
    clearcoat: 1.0,             // 清漆层的光泽度，通常瓷砖表面有很强的光泽感
    clearcoatRoughness: 0.05,   // 清漆层的粗糙度，瓷砖表面光滑
    envMap: scene.background,   // 使用环境贴图来模拟反射（确保有适合的反射环境贴图）
    reflectivity: 0.6,          // 反射强度，可以根据需求调整
  });
  const material1 = new THREE.MeshPhysicalMaterial({
    color: 0xDdDdDE,            // 颜色，类似瓷砖的浅色
    side: THREE.DoubleSide,     // 双面渲染
  })
  // 创建底面
  const bottomGeometry = new THREE.PlaneGeometry(14, 14);
  const bottomMesh = new THREE.Mesh(bottomGeometry, material);
  bottomMesh.material.map = new THREE.TextureLoader().load('./textures/outsideBottom.jpeg'),  // 贴图
    bottomMesh.rotation.x = -Math.PI / 2;  // 旋转 90 度，使其水平
  bottomMesh.rotation.z = -Math.PI / 2;  // 旋转 90 度，使其水平
  bottomMesh.position.y = 0;  // 放置在地面上
  bottomMesh.receiveShadow = true;  // 接收阴影

  // 创建前面
  const frontGeometry = new THREE.PlaneGeometry(14, 5);
  const frontMesh = new THREE.Mesh(frontGeometry, material1);
  frontMesh.position.z = 5;  // 向前移动
  frontMesh.rotation.y = Math.PI;  // 旋转 180 度，使其面向相机

  // 创建后面
  const backGeometry = new THREE.PlaneGeometry(14, 5);
  const backMesh = new THREE.Mesh(backGeometry, material1);
  backMesh.position.z = -5;  // 向后移动
  backMesh.rotation.y = Math.PI;  // 旋转 180 度

  // 创建左侧面
  const leftGeometry = new THREE.PlaneGeometry(14, 5);
  const leftMesh = new THREE.Mesh(leftGeometry, material1);
  leftMesh.position.x = -5;  // 向左移动
  leftMesh.rotation.y = Math.PI / 2;  // 旋转 90 度

  // 创建右侧面
  const rightGeometry = new THREE.PlaneGeometry(14, 5);
  const rightMesh = new THREE.Mesh(rightGeometry, material1);
  rightMesh.position.x = 5;  // 向右移动
  rightMesh.rotation.y = -Math.PI / 2;  // 旋转 -90 度

  zhanting = new THREE.Group();
  zhanting.add(bottomMesh, leftMesh, frontMesh, backMesh, rightMesh);

  scene.add(zhanting);
  // scene.add(bottomMesh);

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

.home-rightC2 {
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
  /* background: #737373a8; */
  /* backdrop-filter: blur(10px); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.colorE {
  width: 100%;

}

.colorList {
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right_title {
  color: #fff;
  font-size: 1.7rem;
  font-weight: 700;
  height: 4rem;
  line-height: 4rem;
}

.right_h5 {
  color: #e0e0e0;
  font-size: 0.85rem;
  line-height: 2rem;
  height: 2rem;
}

.right_1 {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 3rem;
  height: 3rem;
}

.colorList {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.mainRightb {
  height: calc(100% - 3rem);
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

}

.modellist {
  width: 100%;
  height: 8rem;
  cursor: pointer;
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

/* .modelchelunlist1{
  width: 5rem;
  height: 5rem;
  margin: .5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
} */
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