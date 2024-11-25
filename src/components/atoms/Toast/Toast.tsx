interface ToastProps {
  message: string;
}

export const Toast = ({ message }: ToastProps) => {
  return (
    <p
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow"
      role="alert"
    >
      {message}
    </p>
  );
};
