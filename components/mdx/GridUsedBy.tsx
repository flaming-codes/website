const Image = ({ size = 'contain', url, ...rest }) => {
  return (
    <a
      {...rest}
      css={`
        background-image: ' url(${url})';
        background-size: ${size};
        background-repeat: no-repeat;
        background-position: center center;
      `}
    ></a>
  )
}

export const GridUsedBy = () => {
  return (
    <div
      className="grid w-full gap-0"
      css={`
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-auto-rows: minmax(200px, auto);
      `}
    >
      <Image
        title="Aragon"
        size="130px"
        href="https://aragon.org/"
        url="https://wiki.aragon.org/design/logo/svg/isotype.svg"
      />
      <Image
        title="Next"
        size="380px"
        href="https://nextjs.org"
        url="https://process.filestackapi.com/cache=expiry:max/resize=width:1050/compress/FloGbmnXSe3Gd49LAWXQ"
      />
      <Image
        title="Codesandbox"
        href="https://codesandbox.io/"
        url="https://camo.githubusercontent.com/a67bdde6bc5d15103e2516099107980790c0f11f/68747470733a2f2f636f646573616e64626f782e696f2f7374617469632f696d672f62616e6e65722e706e67"
      />
      <Image
        title="Devhub"
        size="120px"
        href="https://devhubapp.com"
        url="https://user-images.githubusercontent.com/619186/49823485-eed18480-fd66-11e8-88c0-700d840ad4f1.png"
      />
      <Image
        title="Quill"
        size="120px"
        href="https://quill.chat"
        url="https://quill.chat/images/homepage/icon/Feather@2x.png"
      />
      <Image
        title="Blockstack"
        size="120px"
        href="https://blockstack.org"
        url="https://avatars3.githubusercontent.com/u/8165984?s=200&v=4"
      />
      <Image
        title="The Azoor Society"
        size="120px"
        href="https://www.theazoorsociety.org"
        url="https://www.theazoorsociety.org/static/favicon-bd4dc352f10904c557f37e9f506327a0.png"
      />
    </div>
  )
}
