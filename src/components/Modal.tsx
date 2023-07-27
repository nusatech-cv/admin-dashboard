import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string | React.ReactNode;
  desc: string | React.ReactNode;
  buttonText?: string;
  type?: "delete" | "submit";
  size?: "large" | "medium";
  centerContent?: boolean;
  onClick?: () => void;
  withButton?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  buttonText,
  desc,
  title,
  type,
  size,
  centerContent = false,
  onClick,
  withButton,
}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-999999" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black-2  bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`w-full ${
                    size === "large"
                      ? " max-w-3xl"
                      : size === "medium"
                      ? "max-w-xl"
                      : "max-w-sm"
                  } transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-boxdark`}
                >
                  <Dialog.Title
                    as="h3"
                    className={`${
                      type === "delete"
                        ? "text-danger"
                        : type === "submit"
                        ? "text-secondary"
                        : "text-primary"
                    } text-lg font-medium ${
                      centerContent && "text-center"
                    }  leading-6`}
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p
                      className={`text-gray-500 text-sm dark:text-white ${
                        centerContent && "text-center"
                      }`}
                    >
                      {desc}
                    </p>
                  </div>

                  {withButton && (
                    <div className="mt-4 flex justify-center">
                      <button
                        type="button"
                        className={`inline-flex justify-center rounded-md border border-transparent ${
                          type === "delete"
                            ? "bg-danger hover:bg-opacity-80"
                            : type === "submit"
                            ? "bg-secondary hover:bg-opacity-90"
                            : "bg-primary bg-opacity-90"
                        }  px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2`}
                        onClick={onClick}
                      >
                        {buttonText || "submit"}
                      </button>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
