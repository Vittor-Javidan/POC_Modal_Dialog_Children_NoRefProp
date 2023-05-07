import React, { useRef, useEffect} from "react"

/*
  Explanation of Modal.js file in details, this is the same as the Modal component
  inside Modal.js, so you can see how small small is the original component, 
  and how much information it has on each line of code. Hope you enjoy it!
*/

export default function Modal({ onPressEsc, children }) {

  /*
    We need this useRef, so we can retrieve the element after the first render.

    When we do this:

    <dialog
      ref={modalRef}
      onCancel={closeModal}
    />

    In React is equivalent to:

    <dialog id="myElement">...</dialog>
    <script>
      var dialog = getElementById("myElement")  // This line is what we doing with useRef()
      dialog.close()                            // Now we can use .close()
      dialog.showModal()                        // Now we can use .showModal()
    </script>

    So, as you see, we can recover the element just by using the useRef() hook,
    wich will be stored inside modalRef.current. This is why we have modalRef.current?. 
    syntax. That way we can access the .close() and .showModal() methods inside <dialog/>
  */

  const modalRef = useRef(null)

  function closeModal() {

    /*
      Callback dedicated for ESC pressing.
      You can just pass the here the same function as the close button.
      So you can handle modal closing when user press esc.
    */

    onPressEsc()
    modalRef.current?.close()
  }

  useEffect(() => {

    /*
      After component mounts, it will close and open the dialog, 
      to garantee no errors will occur when the dialog renders.
      This is because it's easy to use .showModal() when the dialog
      is already opened, causing the react app to crash.
    */

    const { current } = modalRef
    current?.close()
    current?.showModal()

    return () => {

      /* COMPONENT DID UNMOUNT SCOPE:
        No matter what happen to the component, if its destroyed,
        it will call for .close() method, to garantee to focus 
        back to the button last clicked when the modal was opened. 
        
        This way, the parent doesn't need to know anymore about the modal 
        ref, allowing him to arbitrary close the modal through a single 
        boolean as a conditional.
      */
    
      current?.close()
    }
  })
  
  /*
    Yes, all this component needs is the dialog tag and his ref to allow us to use
    both .close() and .showModal() methods, wich are located with the dialog element
    itself. 
    
    He doens't need to know any of his children to work.
  */

  return (
    <dialog
      ref={modalRef}
      onCancel={closeModal}
    >
      {children}
    </dialog>
  )
}