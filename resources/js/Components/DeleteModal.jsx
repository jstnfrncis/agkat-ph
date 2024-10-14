'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useForm } from '@inertiajs/react';

export default function DeleteModal({ establishmentId }) {
  const [open, setOpen] = useState(false) // Initially closed

  const { delete: destroy, processing } = useForm();

  const handleDelete = () => {
      // Trigger the delete request to the backend
      destroy(route('establishment.delete', establishmentId), {
          onFinish: () => {
              alert('Establishment deleted and archived successfully.');
          },
      });
  };

  return (
    <div className='font-Manregular'>
      {/* Button to open the modal */}
      <button
        onClick={() => setOpen(true)} // Opens the modal
        className="inline-flex justify-center rounded-md bg-red-600 px-6 py-4 text-sm font-Manbold text-white shadow-sm hover:bg-red-500"
      >
        Delete Account
      </button>

      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-[500px] sm:max-w-lg"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" className="text-base leading-6 text-gray-900 font-Manbold">
                      Delete account
                    </DialogTitle>
                    <div className="mt-2 flex flex-col gap-2">
                      <p className="text-sm text-gray-500 font-Manregular">
                        Are you sure you want to delete your account?
                      </p>
                      <span className='text-sm  border-stroke font-Manregular text-gray-500'>
                        To retrieve your account, please contact the Agkat Admin.
                        </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  
                  onClick={handleDelete} disabled={processing}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Delete
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
