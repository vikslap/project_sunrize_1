// src/data/lessonComponents.js

const lessonComponents = {
  module1: {
    lesson1: () => import('../lessons/module1/lesson1'),
    lesson2: () => import('../lessons/module1/lesson2'),
    lesson3: () => import('../lessons/module1/lesson3'),
  },
  module2: {
    lesson1: () => import('../lessons/module2/lesson1'),
    lesson2: () => import('../lessons/module2/lesson2'),
  },
};

export default lessonComponents;
