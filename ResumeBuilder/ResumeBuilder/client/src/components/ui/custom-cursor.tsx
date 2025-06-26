import { useCustomCursor } from "@/hooks/use-custom-cursor";

export default function CustomCursor() {
  const { cursorRef } = useCustomCursor();

  return (
    <div
      ref={cursorRef}
      className="custom-cursor hidden lg:block"
      style={{ left: 0, top: 0 }}
    />
  );
}
