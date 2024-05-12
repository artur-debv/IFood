import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    <Image
    height={500} // Defina a altura desejada da imagem aqui
    width={500}  // Defina a largura desejada da imagem aqui
      className="h-auto w-full object-contain lg:h-80 "
      sizes="100vw"
      quality={100}
      {...props}
    />
  );
};

export default PromoBanner;
