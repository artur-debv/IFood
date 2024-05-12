import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    <Image
      height={0} // Defina a altura desejada da imagem aqui
      width={0}  // Defina a largura desejada da imagem aqui
      className="h-auto w-full object-contain lg:h-80 "
      sizes="100vw"
      quality={100}
      {...props}
    />
  );
};

export default PromoBanner;
