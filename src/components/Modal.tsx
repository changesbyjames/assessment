import { Dialog } from '@headlessui/react';
import { PropsWithChildren, useState } from 'react';

export interface ModalProps<T = void> {
  isOpen: boolean;
  open: (props?: T) => void;
  close: () => void;
  props?: T;
}

export function useModal<T = void>(): ModalProps<T> {
  const [isOpen, setIsOpen] = useState(false);
  const [props, setProps] = useState<T>();
  const open = (props?: T) => {
    setProps(props);
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
    setProps(undefined);
  };
  return { isOpen, open, close, props };
}

export function Modal<T = void>({ isOpen, close, children }: PropsWithChildren<ModalProps<T>>) {
  return (
    <Dialog open={isOpen} onClose={close}>
      <Dialog.Overlay
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.1)', zIndex: 0 }}
      />
      <Dialog.Panel style={{ background: 'white', zIndex: 10, position: 'relative' }}>{children}</Dialog.Panel>
    </Dialog>
  );
}
