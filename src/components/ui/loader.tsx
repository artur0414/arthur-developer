import { useTranslations } from "next-intl";

// Loader.tsx
export const Loader = ({ sizeParent = false }: { sizeParent?: boolean }) => {
  const t = useTranslations("Loader");
  return sizeParent ? (
    // Loader que toma el tamaño del contenedor padre
    <div className="relative w-full h-full inset-0 flex items-center justify-center bg-custom-white z-50">
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-custom-yellow border-t-transparent rounded-full"></div>
        <span className="text-custom-yellow ml-4">{t("loading")}</span>
      </div>
    </div>
  ) : (
    // Loader por defecto que cubre toda la pantalla
    <div className="absolute w-screen h-screen inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-full h-full bg-custom-white flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-custom-yellow border-t-transparent rounded-full"></div>
        <span className="text-custom-blue ml-4">{t("loading")}</span>
      </div>
    </div>
  );
};

export default Loader;
