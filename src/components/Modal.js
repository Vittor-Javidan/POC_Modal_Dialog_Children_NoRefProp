import React, { useRef, useEffect} from "react"

export default function Modal({ onPressEsc, children }) {

  const modalRef = useRef(null)

  function closeModal() {
    onPressEsc()
    modalRef.current?.close()
  }

  useEffect(() => {
    const { current } = modalRef
    current?.close()
    current?.showModal()
    return () => {
      current?.close()
    }
  })
  
  return (
    <dialog
      ref={modalRef}
      onCancel={closeModal}
    >
      {children}
    </dialog>
  )
}