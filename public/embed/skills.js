/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

var vector = new Two.Vector();
var entities = [];
var mouse;
var copy = [
  "TypeScript",
  "Python",
  "Java",
  "React",
  "Angular",
  "Nest",
  "Node",
  "UI/UX",
  "Figma",
  "Three.JS",
  "GSAP",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "ML",
  "TensorFlow",
  "Keras",
  "PyTorch",
  "OpenCV",
];

var two = new Two({
  type: Two.Types.canvas,
  fullscreen: true,
  autostart: true,
}).appendTo(document.body);

var solver = Matter.Engine.create();
solver.world.gravity.y = 1;

var bounds = {
  length: 5000,
  thickness: 50,
  properties: {
    isStatic: true,
  },
};

// bounds.top = createBoundary(bounds.length, bounds.thickness);
bounds.left = createBoundary(bounds.thickness, bounds.length);
bounds.right = createBoundary(bounds.thickness, bounds.length);
bounds.bottom = createBoundary(bounds.length, bounds.thickness);

Matter.World.add(solver.world, [
  /*bounds.top.entity,*/ bounds.left.entity,
  bounds.right.entity,
  bounds.bottom.entity,
]);

var defaultStyles = {
  size: 1,
  weight: 300,
  fill: "white",
  border: "1px solid red",
  leading: 0,
  family: "Angus, Arial, sans-serif",
  alignment: "center",
  baseline: "baseline",
  margin: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  padding: 0,
};

addSlogan();
resize();
mouse = addMouseInteraction();
two.bind("resize", resize).bind("update", update);

function addMouseInteraction() {
  // add mouse control
  var mouse = Matter.Mouse.create(document.body);
  var mouseConstraint = Matter.MouseConstraint.create(solver, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
    },
  });

  Matter.World.add(solver.world, mouseConstraint);

  return mouseConstraint;
}

function resize() {
  var thickness = bounds.thickness;

  vector.x = -thickness / 2;
  vector.y = two.height / 2;
  Matter.Body.setPosition(bounds.left.entity, vector);

  vector.x = two.width + thickness / 2;
  vector.y = two.height / 2;
  Matter.Body.setPosition(bounds.right.entity, vector);

  vector.x = two.width / 2;
  vector.y = two.height + thickness / 2;
  Matter.Body.setPosition(bounds.bottom.entity, vector);

  var size = 50;

  var leading = 0;

  for (var i = 0; i < two.scene.children.length; i++) {
    var child = two.scene.children[i];

    if (!child.isWord) {
      continue;
    }

    var text = child.text;
    var rectangle = child.rectangle;
    var entity = child.entity;

    text.size = size;
    text.leading = leading;

    var rect = text.getBoundingClientRect(true);
    rectangle.width = rect.width;
    rectangle.height = rect.height;

    Matter.Body.scale(entity, 1 / entity.scale.x, 1 / entity.scale.y);
    Matter.Body.scale(entity, rect.width, rect.height);
    entity.scale.set(rect.width, rect.height);

    text.size = size / 3;
  }
}

function addSlogan() {
  var x = defaultStyles.margin.left;
  var y = -two.height; // Header offset

  for (var i = 0; i < copy.length; i++) {
    var word = copy[i];
    var group = new Two.Group();
    var text = new Two.Text("", 0, 0, defaultStyles);
    text.size = 0.1;

    group.isWord = true;

    // Override default styles
    if (word.value) {
      text.value = word.value;

      for (var prop in word.styles) {
        text[prop] = word.styles[prop];
      }
    } else {
      text.value = word;
    }

    var rect = text.getBoundingClientRect();
    var ox = x + rect.width / 2;
    var oy = y + rect.height / 2;

    var ca = x + rect.width;
    var cb = two.width;

    // New line
    if (ca >= cb) {
      x = defaultStyles.margin.left;
      y +=
        defaultStyles.leading +
        defaultStyles.margin.top +
        defaultStyles.margin.bottom;

      ox = x + rect.width / 2;
      oy = y + rect.height / 2;
    }

    group.translation.x = ox;
    group.translation.y = oy;
    text.translation.y = 14;

    var rectangle = new Two.RoundedRectangle(
      0,
      0,
      rect.width / 2,
      rect.height / 2,
      25
    );
    rectangle.fill = "transparent";
    rectangle.stroke = "#ceff74"; // Set the border color
    rectangle.linewidth = 2; // Set the border width
    rectangle.visible = true;

    var entity = Matter.Bodies.rectangle(ox, oy, 1, 1);
    Matter.Body.scale(entity, rect.width, rect.height);

    entity.scale = new Two.Vector(rect.width, rect.height);
    entity.object = group;
    entities.push(entity);

    x += rect.width + defaultStyles.margin.left + defaultStyles.margin.right;

    group.text = text;
    group.rectangle = rectangle;
    group.entity = entity;

    group.add(rectangle, text);
    two.add(group);
  }

  Matter.World.add(solver.world, entities);
}

function update(frameCount, timeDelta) {
  var allBodies = Matter.Composite.allBodies(solver.world);
  Matter.MouseConstraint.update(mouse, allBodies);
  Matter.MouseConstraint._triggerEvents(mouse);

  Matter.Engine.update(solver);

  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];
    entity.object.position.copy(entity.position);
    entity.object.rotation = entity.angle;
  }
}

function createBoundary(width, height) {
  var rectangle = two.makeRectangle(0, 0, width, height);
  rectangle.visible = false;

  rectangle.entity = Matter.Bodies.rectangle(
    0,
    0,
    width,
    height,
    bounds.properties
  );
  rectangle.entity.position = rectangle.position;

  return rectangle;
}
