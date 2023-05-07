import React, { useRef, useEffect} from "react"

export default function Modal({ onPressEsc, children }) {

  const modalRef = useRef(null)

  function openModal() {
    modalRef.current?.close()
    modalRef.current?.showModal()
  }

  function closeModal() {
    onPressEsc()
    modalRef.current?.close()
  }

  useEffect(() => {
    const { current } = modalRef
    openModal()
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