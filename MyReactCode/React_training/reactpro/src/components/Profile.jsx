//Creating 2 components in same file and then passing props from one to another.

function Avatar({src,alt,height,width}) {
  return <img src={src} alt={alt} height={height} width={width} />;
}

export default function Profile() {
  const info = {
    src: "https://miro.medium.com/v2/resize:fit:2000/1*y6C4nSvy2Woe0m7bWEn4BA.png",
    alt: "React Image",
    width: 200,
    height: 100,
  };
  return <Avatar src={info.src} alt={info.alt} height={info.height} width={info.width} />;
}
