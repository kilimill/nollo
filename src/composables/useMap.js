export default function useMap () {  
  const optionsMap = {
    autoFitToViewport: "always",
    zoomControlPosition: { right: 15, top: 120 },
    yandexMapDisablePoiInteractivity: true
  };

  const clusterOptions = {
    1: {
      groupByCoordinates: false,
      preset: "islands#invertedDarkGreenClusterIcons",
      clusterIcons: [
        {
          href: "/images/map/cluster-icons.svg",
          size: [64, 64],
          offset: [-32, -32],
        },
      ],
    },
  };

  const markerOptions = {
    iconLayout: "default#image",
    iconImageHref: "/images/map/map-pin.svg",
    iconImageSize: [70, 82],
    iconImageOffset: [-35, -41],
  };

  return { clusterOptions, markerOptions, optionsMap };
};
