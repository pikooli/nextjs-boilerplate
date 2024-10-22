import { RemoveItem } from '@/src/components/atoms/buttons';
import { useModalStore } from '@/src/libs/zustand';

export function Modal() {
  const { modalContent, setModalContent } = useModalStore();

  if (!modalContent) return null;

  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50 p-5">
      <div
        className="absolute h-screen w-screen"
        onClick={(e) => {
          e.stopPropagation();
          setModalContent(null);
        }}
      ></div>
      <div className="relative z-50 min-h-40 min-w-64 rounded-lg bg-white p-10">
        <div className="absolute right-2 top-2">
          <RemoveItem onClick={() => setModalContent(null)} />
        </div>
        {modalContent}
      </div>
    </div>
  );
}
