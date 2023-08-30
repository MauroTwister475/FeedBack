import { Popover } from '@headlessui/react';
import { X } from '@phosphor-icons/react';

export function CloseButton() {
  return (
    <Popover.Button className="text-zinc-400 hover:text-zinc-100" title='Fechar formulário de feedback'>
      <X weight='bold' size={15} />
    </Popover.Button>
  )
}