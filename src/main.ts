import "./style.css";
import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import {
  ArcRotateCamera,
  Engine,
  HemisphericLight,
  MeshBuilder,
  Scene,
  Vector3,
} from "@babylonjs/core";

class App {
  constructor() {
    const canvas = document.createElement("canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.id = "shopby-canvas";
    document.getElementById("app")?.appendChild(canvas);

    // initialize babylon scene and engine
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);
    const camera = new ArcRotateCamera(
      "Camera",
      Math.PI / 2,
      Math.PI / 2,
      2,
      Vector3.Zero(),
      scene,
    );
    camera.attachControl(canvas, true);

    new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
    MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);

    // hide/show the Inspector
    window.addEventListener("keydown", (ev) => {
      if (ev.key === "i") {
        if (scene.debugLayer.isVisible()) {
          scene.debugLayer.hide();
        } else {
          scene.debugLayer.show();
        }
      }
    });

    engine.runRenderLoop(() => {
      scene.render();
    });
  }
}
new App();
