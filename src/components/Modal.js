import React, { useRef, useEffect} from "react"

export default function Modal({ onPressEsc, children }) {

  const modalRef = useRef(null)

  function closeModal() {
    onPressEsc()
    modalRef.current?.close()
  }

  useEffect(() => {
    const { current } = modalRef
    modalRef.current?.close()
    modalRef.current?.showModal()
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