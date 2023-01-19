const vkInit = () => {
  const VK = window.VK;
  VK.init({
    apiId: 112199313,
    onlyWidgets: true
  });
  VK.Widgets.Group("vk_group", {
    mode: 3,
    height: 346,
    width: 304,
    color1: "FFFFFF",
    color2: "000000",
    color3: "5181B8"
  }, 112199313)
}

export {
  vkInit
}