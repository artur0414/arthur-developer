"use client";

import React, { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    // Mover el cursor según el movimiento del mouse
    const onMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    // Detecta cuando el mouse entra en un elemento clickeable
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Comprobamos si el elemento es un enlace, un botón o tiene el atributo 'clickable'
      if (
        target.tagName === "IMG" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.hasAttribute("clickable")
      ) {
        cursor?.classList.add("clickable");
      }
    };

    // Detecta cuando el mouse sale de un elemento clickeable
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "IMG" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.hasAttribute("clickable")
      ) {
        cursor?.classList.remove("clickable");
      }
    };

    // Escuchar el movimiento del mouse para mover el cursor
    document.addEventListener("mousemove", onMouseMove);

    // Escuchar cuando el mouse entra o sale de los elementos clickeables
    document.addEventListener("mouseover", onMouseOver); // Usamos `mouseover`
    document.addEventListener("mouseout", onMouseOut); // Usamos `mouseout`

    // Limpiar los eventos cuando el componente se desmonte
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return <div id="custom-cursor" className="custom-cursor"></div>;
}
