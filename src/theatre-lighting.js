import * as THREE from "three";

export function buildTheatreLighting(stage, { warm, ground }) {
  const root = new THREE.Group();
  root.name = "Theatre_Lighting";
  // Low, constant reflected light keeps the unlit room legible.
  const ambient = new THREE.HemisphereLight(warm, ground, 0.35);
  ambient.name = "Reflected_Light";
  root.add(ambient);

  const stageLights = new THREE.Group();
  stageLights.name = "Stage_Lighting";
  root.add(stageLights);
  const addStageLight = (name, color, intensity, position, target) => {
    const light = new THREE.SpotLight(color, intensity, 28, Math.PI * 0.3, 0.6, 2);
    light.name = name;
    light.position.set(...position);
    light.target.position.set(...target);
    stageLights.add(light, light.target);
  };
  addStageLight("Stage_Front_Light", "#ffdfbc", 480,
    [0, stage.height - 1, stage.front - 0.8], [0, 1, stage.front - 6]);
  addStageLight("Stage_Back_Light", "#dce4ee", 240,
    [0, stage.height - 2, stage.front - 9], [0, 1, stage.front - 3]);

  const houseLights = new THREE.Group();
  houseLights.name = "House_Lighting";
  root.add(houseLights);
  // Local lights illuminate the audience area instead of changing global light
  // shared with the stage. Their ranges stop before the performance area.
  const front = new THREE.PointLight(warm, 500, 16, 2);
  front.name = "House_Front_Light";
  front.position.set(0, 10, stage.front + 14);
  const rear = new THREE.PointLight(warm, 800, 29, 2);
  rear.name = "House_Rear_Light";
  rear.position.set(0, 14, stage.front + 30);
  houseLights.add(front, rear);

  return {
    root,
    setLighting(mode) {
      houseLights.visible = mode !== "show";
    },
  };
}
